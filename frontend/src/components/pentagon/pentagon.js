
import styled from 'styled-components';

const PentagonContainer = ({className, children, ...props}) => {


return (
	<div className={className} {...props}>
		<div className="pentagon__outer">
			<div className="pentagon__outer__inner"></div>
		</div>
		<div className="pentagon__content">
			<div className="icon-box">{children}</div>
		</div>
	</div>
)
};

export const Pentagon = styled(PentagonContainer)`

	height: 30px;
	display: inline-block;
	max-width: calc(100% - 15px);
	position: relative;
	margin: 10px 0 0 -20px;
	transform: rotate(-90deg);

	&:hover .pentagon__content {
		background-color: #fff;
	}

	&:hover .pentagon__outer  .pentagon__outer__inner {
		background-color: #fff;
	}

	& .pentagon__outer {
		position: relative;
		width: 24px;
		height: 43px;
		top: 7px;
		left: 0;
		overflow: hidden;
		transform: rotate(-180deg);
		-ms-transform: rotate(-180deg);
		-o-transform: rotate(-180deg);
		-moz-transform: rotate(-180deg);
	}

	& .pentagon__outer__inner {
		transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		/* -webkit-transform: rotate(45deg); */
		-o-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		background-color: #595959;
		width: 33px;
		height: 54px;
		top: 2px;
		left: -27px;
		position: relative;
		-moz-border-radius: 4px;
		border: 2px solid rgba(0, 0, 0);
		border-radius: 4px;
	}


	& .pentagon__content {
		top: -35px;
		left: 23px;
		height: 40px;
		line-height: 27px;
		padding-left: 10px;
		border: 2px solid rgba(0, 0, 0);
		position: relative;
		border-left: none;
		border-radius: 0 4px 4px 0;
		width: calc(100% + 15px);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background-color: #595959;
		padding-right: 10px;
	}

	& .icon-box {
		transform: rotate(90deg);
		padding: 13px 12px 10px 5px;
	}
`;


