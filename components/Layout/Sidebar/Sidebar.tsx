import React from "react";
import { IconContext } from "react-icons";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsCalendarWeek, BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
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
];

const Sidebar = () => {
	const router = useRouter();

	const currentUrl = router.pathname;

	return (
		<div className="relative w-full h-full">
			<div className="relative flex flex-col w-full h-full gap-2 text-sm md:text-base">
				{options.map((option) => (
					<Link href={option.url} key={option.id}>
						<div
							className={`flex ${
								currentUrl === option.url
									? "text-primary mdLborder-r-4 md:border-primary md:bg-light/25 font-bold"
									: "text-neutral-400 hover:text-light"
							}  w-full  items-center justify-center p-2 group cursor-pointer `}
						>
							<div className="flex items-center justify-between w-48 gap-3 md:gap-6">
								<span>{option?.Tab}</span>
								<span>
									<IconContext.Provider
										value={{
											className: ` ${
												currentUrl === option.url
													? "text-primary"
													: "text-neutral-400 group-hover:text-light"
											} `,
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
				className={`flex  w-full  items-center justify-center p-2 group cursor-pointer absolute bottom-[10%] hover:bg-red-100/50`}
				onClick={() => signOut()}
			>
				<div className="flex items-center justify-between w-48 gap-6 text-red-400 hover:text-red-500">
					<span>Sign Out</span>
					<span>
						<IconContext.Provider value={{}}>
							<AiOutlinePoweroff />
						</IconContext.Provider>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
