import React from "react";
import { IconContext } from "react-icons";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsCalendarWeek, BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/react";

const options = [
	{
		id: 1,
		Tab: "Dashboard",
		icon: <BiHomeAlt />,
		url: "/dashboard",
	},
	{
		id: 2,
		Tab: "Schedule",
		icon: <BsCalendarWeek />,
		url: "/schedule",
	},
	{
		id: 3,
		Tab: "Transactions",
		icon: <BsCurrencyDollar />,
		url: "/transactions",
	},
	{
		id: 4,
		Tab: "Employees",
		icon: <MdOutlinePeopleAlt />,
		url: "/employee",
	},
	{
		id: 5,
		Tab: "tasks",
		icon: <FaTasks />,
		url: "/tasks",
	},
];

const Sidebar = () => {
	const router = useRouter();

	const currentUrl = router.pathname;

	return (
		<div className="relative w-full h-full">
			<div className="relative flex flex-col w-full h-full gap-4 text-sm md:text-base">
				{options.map((option) => (
					<Link href={option.url} key={option.id}>
						<div
							className={`flex ${
								currentUrl === option.url
									? "text-primary md:border-r-2 2xl:border-r-4 md:border-primary md:bg-light/30 font-bold"
									: "text-neutral-400 hover:text-light"
							}  w-full group items-center justify-center p-2 group cursor-pointer `}
						>
							<div className="flex items-center w-40 gap-0 md:w-16 2xl:w-48 2xl:justify-between md:justify-center justify-evenly md:gap-6">
								<span className="flex justify-start w-24 group md:hidden 2xl:flex ">
									{option?.Tab}
								</span>
								<span className="transition-all duration-300 group-active:rotate-[30deg]">
									<IconContext.Provider
										value={{
											className: ` ${
												currentUrl === option.url
													? "text-primary"
													: "text-neutral-400 group-hover:text-light"
											} md:scale-110 `,
											size: "1.25em",
										}}
									>
										{option.icon}
									</IconContext.Provider>
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div
				className={`flex  w-full text-sm md:text-base  items-center justify-center p-2 group cursor-pointer absolute md:bottom-[10%] bottom-1/4 hover:bg-red-100/50`}
				onClick={() => signOut()}
			>
				<div className="flex items-center w-40 text-red-400 justify-evenly 2xl:justify-between md:justify-center hover:text-red-500">
					<span className="flex justify-start w-24 md:hidden 2xl:flex ">
						Sign Out
					</span>
					<span>
						<IconContext.Provider
							value={{ size: "1.25em", className: "md:scale-110" }}
						>
							<AiOutlinePoweroff />
						</IconContext.Provider>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
