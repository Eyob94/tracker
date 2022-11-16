import React from "react";

type layoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
	return (
		<div className="w-full h-full min-h-screen min-w-[100vw]">
			{/*  */}
			<div className="w-full h-full">
				<div className="flex w-full">
					<div className="w-1/5 h-full max-w-md min-h-screen bg-red-500">
						fasdfasd
					</div>
					<div className="flex flex-col flex-1 h-full min-h-screen">
						<div className="w-full bg-neutral-50 max-h-12">fdsafas</div>
						<div className="w-full h-full min-h-full bg-light/50 ">
							fdsafasd
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
