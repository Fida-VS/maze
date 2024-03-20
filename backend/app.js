require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { register, login, getUsers, getRoles, updateUser, deleteUser } = require("./controllers/user");
const { addReview, editReview, deleteReview, getReviews, getReview } = require("./controllers/review");
const mapUser = require("./helpers/mapUser");
const authenticated = require("./middlewares/authenticated");
const hasRole = require("./middlewares/hasRole");
const ROLES  = require('./constants/roles');
const mapReview = require("./helpers/mapReview");


const port = 3001;
const app = express();

app.use(express.static('../frontend/build'));

app.use(cookieParser());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(req.body.login, req.body.password);

    res.cookie("token", token, { httpOnly: true })
    .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.login, req.body.password);

    res.cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});


app.post('/logout', (req, res) => {
    res.cookie("token", '', { httpOnly: true })
      .send({});
})

app.get('/reviews', async (req, res) => {
const { reviews, lastPage } = await getReviews(
  req.query.search,
  req.query.limit,
  req.query.page,
)
res.send({ data: {lastPage, reviews: reviews.map(mapReview)} })
})

app.get('/reviews/:id', async (req, res) => {
  const review = await getReview(req.params.id)

  res.send({data: mapReview(review)})
})

app.use(authenticated);



app.post('/reviews', hasRole([ROLES.ADMIN, ROLES.USER]), async (req, res) => {
  const newReview = await addReview({
        title: req.body.title,
        content: req.body.content,
        image: req.body.imageUrl,
        author: req.user.id
  });

  res.send({data: mapReview(newReview)})
})


app.patch('/reviews/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
  const updatedReview = await editReview(
      req.params.id,
      {
          title: req.body.title,
          content: req.body.content,
          image: req.body.imageUrl,
      }
  );

  res.send({ data: mapReview(updatedReview) })
})


app.delete('/reviews/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteReview(req.params.id);

  res.send({error: null})
})

app.get('/users', hasRole([ROLES.ADMIN]), async (req, res) => {
  const users = await getUsers();

  res.send({ data: users.map(mapUser) })
})

app.get('/users/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
  const roles = getRoles();

   res.send({ data: roles })
})

app.patch('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    role: req.body.roleId
  })
  res.send({ data: mapUser(newUser) })
})

app.delete('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id)

  res.send({ error: null })
})

mongoose
  .connect(
    process.env.DB_CONNECTION_STRING
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  });
