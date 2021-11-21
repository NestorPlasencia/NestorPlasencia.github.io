import React from "react";
import Lottie from "react-lottie";

const GreetingLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div >
			<Lottie options={defaultOptions} isClickToPauseDisabled={true}/>
		</div>
	);
};

export default GreetingLottie;
