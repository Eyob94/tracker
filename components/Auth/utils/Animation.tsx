import Image from "next/image";
import React from "react";

const Animation = () => {
	return (
		<div className="relative top-0 h-full px-32 w-max">
			<div className="flex items-center h-full w-max">
				<Image src={"/icons/auth_animation.svg"} width={280} height={280} />
			</div>
		</div>
	);
};

export default Animation;
