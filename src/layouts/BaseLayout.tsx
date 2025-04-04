import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import Sidebar from "@/components/custom/Sidebar";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

interface baseLayoutProps {}

export const tokenCTX = createContext<string>("");

const BaseLayout: React.FC<baseLayoutProps> = () => {
	const token: string = localStorage.getItem("token") || "";

	return (
		<tokenCTX.Provider value={token}>
			<div className="h-screen w-full flex flex-col">
				<Header />

				<ResizablePanelGroup direction="horizontal" className="flex-1">
					<ResizablePanel defaultSize={15} minSize={5} className="max-w-150">
						<Sidebar />
					</ResizablePanel>

					<ResizableHandle />

					<ResizablePanel>
						<main className="p-4 overflow-auto h-full">
							<Outlet />
						</main>
					</ResizablePanel>
				</ResizablePanelGroup>

				<Footer />
			</div>
		</tokenCTX.Provider>
	);
};

export default BaseLayout;

