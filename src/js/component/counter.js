import React from "react";
import ReactDOM from "react-dom";
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

let SecondsCounter = 0;
setInterval(function() {
	digit1 = Math.floor(SecondsCounter);
	digit2 = Math.floor(SecondsCounter / 10);
	digit3 = Math.floor(SecondsCounter / 100);
	digit4 = Math.floor(SecondsCounter / 1000);
	digit5 = Math.floor(SecondsCounter / 10000);
	digit6 = Math.floor(SecondsCounter / 100000);
	SecondsCounter++;
	ReactDOM.render(
		<Counter
			dg1={digit1}
			dg2={digit2}
			dg3={digit3}
			dg4={digit4}
			dg5={digit5}
			dg6={digit6}
		/>
	);
}, 1000);

export default Counter;
