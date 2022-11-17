import React from "react";
import { IconContext } from "react-icons";
import { BiHomeAlt } from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

const options = [
	{
		Tab: "Dashboard",
		icon: <BiHomeAlt />,
		url: "/dashboard",
	},
	{
		Tab: "Schedule",
		icon: <BsCalendarWeek />,
		url: "/schedule",
	},
];

const Sidebar = () => {
	const router = useRouter();

	const currentUrl = router.pathname;

	return (
		<>
			<div className="flex flex-col w-full gap-2">
				{options.map((option) => (
					<Link href={option.url}>
						<div
							className={`flex ${
								currentUrl === option.url
									? "text-primary border-r-4 border-primary bg-light/25 "
									: "text-neutral-400 hover:text-light"
							}  w-full  items-center justify-center p-2 group cursor-pointer `}
						>
							<div className="flex items-center justify-between w-48 gap-6">
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
		</>
	);
};

export default Sidebar;
