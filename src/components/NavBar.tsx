import React from "react";
import { useState } from "react";

export default function NavBar() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<React.Fragment>
			<div className="navbar bg-emerald-500">
				<div className="w-screen flex justify-start">
					<h1 className="text-purple-800 font-bold text-2xl ml-12">Title.</h1>
				</div>
				<div className="hidden md:flex gap-6 px-12">
					<button className="btn btn-outline btn-primary">Login</button>
					<button className="btn btn-primary">Signup</button>
				</div>

				<div className="md:hidden">
					<label className="btn btn-sm btn-square btn-primary swap swap-rotate">
						<input type="checkbox" onClick={(): void => setOpen(!open)} />
						<svg
							className="swap-off fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 512 512"
						>
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>
						<svg
							className="swap-on fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 512 512"
						>
							<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
						</svg>
					</label>
				</div>
			</div>

			{open && (
				<div className="flex justify-evenly bg-neutral-content py-4">
					<button className="btn btn-sm btn-outline btn-primary">Login</button>
					<button className="btn btn-sm btn-primary">Signup</button>
				</div>
			)}
		</React.Fragment>
	);
}
