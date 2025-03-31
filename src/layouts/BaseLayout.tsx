import React from "react";
import { Link, Outlet } from "react-router-dom";

interface BaseLayoutProps {}

const BaseLayout: React.FC<BaseLayoutProps> = () => {
    return (
		<div>
			<header>
				<h1>Base Layout</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				Base layout
			</footer>
		</div>
	)
}

export default BaseLayout;