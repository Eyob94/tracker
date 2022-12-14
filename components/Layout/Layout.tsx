import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import Button from "../Button/Button";

type layoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
	const [showSideBar, setShowSideBar] = useState<Boolean>(false);

	return (
		<div className="w-full h-full min-h-full min-w-[100vw] overflow-hidden">
			{/*  */}
			<div className="w-full h-screen">
				<div className="flex w-full h-full">
					<div className="md:flex flex-col md:relative items-center w-[50%] shadow-lg md:w-20 2xl:w-[15%] h-full  max-w-md  gap-8  bg-white absolute">
						<div className="flex items-center justify-center px-6 py-2 m-8 text-xl font-semibold text-white rounded-lg shadow md:px-4 md:py-1 2xl:text-3xl w-max bg-primary">
							<span className="items-center justify-center hidden text-left md:flex 2xl:hidden">
								T
							</span>
							<span className="flex md:hidden 2xl:flex">Tracker</span>
						</div>
						<div className="w-full h-full">
							<Sidebar />
						</div>
					</div>
					<div
						className={`flex flex-col flex-1 h-full overflow-hidden relative transition-all duration-300 bg-white ${
							showSideBar &&
							"scale-[82.5%] rounded-[2rem] left-1/2 drop-shadow-xl shadow-black/20 shadow-lg"
						}`}
					>
						<div className="flex items-center w-full gap-4 p-2 bg-white shadow-lg md:justify-end shadow-light/10 max-h-20 text-neutral-700">
							<span
								className="flex md:hidden"
								onClick={() => setShowSideBar((prev) => !prev)}
							>
								<Button
									disabled={false}
									className="p-2 rounded-full hover:bg-neutral-200/75 active:scale-90 will-change-transform"
								>
									<IconContext.Provider value={{}}>
										<GiHamburgerMenu />
									</IconContext.Provider>
								</Button>
							</span>
							<div className="">fdsafas</div>
						</div>
						<div className="w-full h-full p-4 shadow-inner bg-light/10 shadow-light/40">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
