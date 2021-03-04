import React from "react";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div className="container">
			<div className="counter-box p-2 display-2 d-flex justify-content-center text-white fw-bolder">
				<div>
					<i className="far fa-clock"></i>
				</div>
				<div>{props.dg6 % 10}</div>
				<div>{props.dg5 % 10}</div>
				<div>{props.dg4 % 10}</div>
				<div>{props.dg3 % 10}</div>
				<div>{props.dg2 % 10}</div>
				<div>{props.dg1 % 10}</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	dg1: PropTypes.number,
	dg2: PropTypes.number,
	dg3: PropTypes.number,
	dg4: PropTypes.number,
	dg5: PropTypes.number,
	dg6: PropTypes.number
};

export default Counter;
