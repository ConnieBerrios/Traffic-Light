import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [luz, setLuz] = useState({ luz1: false, luz2: false, luz3: false });
	return (
		<div className="container">
			<h1>Traffic Light</h1>
			<br />
			<div id="div1">
				<div
					className={luz.luz1 ? "luz1On" : "luz1"}
					onClick={() =>
						setLuz({ luz1: true, luz2: false, luz3: false })
					}></div>
				<div
					className={luz.luz2 ? "luz2On" : "luz2"}
					onClick={() =>
						setLuz({ luz1: false, luz2: true, luz3: false })
					}></div>
				<div
					className={luz.luz3 ? "luz3On" : "luz3"}
					onClick={() =>
						setLuz({ luz1: false, luz2: false, luz3: true })
					}></div>
			</div>
		</div>
	);
};

export default Home;
