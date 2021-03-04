//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Counter from "./component/counter.js";

//render your react application
let SecondsCounter = 0;
setInterval(function() {
	const digit1 = Math.floor(SecondsCounter);
	const digit2 = Math.floor(SecondsCounter / 10);
	const digit3 = Math.floor(SecondsCounter / 100);
	const digit4 = Math.floor(SecondsCounter / 1000);
	const digit5 = Math.floor(SecondsCounter / 10000);
	const digit6 = Math.floor(SecondsCounter / 100000);
	SecondsCounter++;
	ReactDOM.render(
		<Counter
			dg1={digit1}
			dg2={digit2}
			dg3={digit3}
			dg4={digit4}
			dg5={digit5}
			dg6={digit6}
		/>,
		document.querySelector("#app")
	);
}, 1000);
