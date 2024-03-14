import styled from "styled-components";

const TableRowContainer = ({className, children}) => (
<div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
display: flex;
${({border}) => (border ? 'border: 1px solid #000;' : '')};


& > div {
	display: flex;
	align-items: center;
	padding: 7px 10px;

}

& .login-column{
	width: 172px;
}

& .registered-at-column{
	width: 213px;
}

& .role-column{
	width: auto;
}
`;


