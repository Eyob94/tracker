import React from "react";
import Sidebar from "./Sidebar/Sidebar";

type layoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
	return (
		<div className="w-full h-full min-h-screen min-w-[100vw]">
			{/*  */}
			<div className="w-full h-full">
				<div className="flex w-full">
					<div className="flex flex-col  items-center w-[15%] h-full max-w-md min-h-screen gap-8  bg-white">
						<div className="px-6 py-2 m-8 text-3xl font-semibold text-white rounded-lg shadow w-max bg-primary">
							Tracker
						</div>
						<div className="w-full">
							<Sidebar />
						</div>
					</div>
					<div className="flex flex-col flex-1 h-full min-h-screen">
						<div className="w-full p-4 bg-white max-h-20">fdsafas</div>
						<div className="w-full h-full min-h-full shadow-inner bg-light/15 backdrop-blur-lg shadow-light/35">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
