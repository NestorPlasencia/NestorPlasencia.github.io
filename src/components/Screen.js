import React from "react";

const Screen = ({ id, children }) => {
	return (<section className="screen" id={id}>
		{children}
	</section>)
};

export default Screen;
