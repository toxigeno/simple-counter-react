import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div className="container">
			<div className="counter-box mx-auto">
				<div className="display-3 d-flex bg-dark text-white">
					<div className="clock-icon">
						<i className="far fa-clock"></i>
					</div>
					<div>{props.twilight % 10}</div>
					<div>{props.hours % 10}</div>
					<div>{props.minutes % 10}</div>
					<div className="seconds">{props.seconds % 10}</div>
				</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	twilight: PropTypes.number,
	hours: PropTypes.number,
	minutes: PropTypes.number,
	seconds: PropTypes.number
};

let begining = 0;
setInterval(function() {
	const twl = Math.floor(begining / 1000);
	const hrs = Math.floor(begining / 100);
	const min = Math.floor(begining / 10);
	const sec = Math.floor(begining);
	begining++;
	ReactDOM.render(
		<Counter seconds={sec} minutes={min} hours={hrs} twilight={twl} />
	);
}, 1000);

export default Counter;