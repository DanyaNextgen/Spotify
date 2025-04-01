import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";
import RightSidebar from "@/components/custom/RightSidebar";
import Sidebar from "@/components/custom/Sidebar";
import Content from "@/components/custom/Content";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";

interface BaseLayoutProps {}

const BaseLayout: React.FC<BaseLayoutProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex">
        <ResizablePanelGroup direction="horizontal" className="h-full w-full">
          <ResizablePanel defaultSize={20} minSize={1} maxSize={15} className="lg:block sm:hidden md:hidden">
            <Sidebar />
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-transparent hover:bg-white" />

          <ResizablePanel defaultSize={60} className="h-full w-full">
            <Content />
          </ResizablePanel>

          <ResizableHandle className="w-1 bg-transparent hover:bg-white" />

          <ResizablePanel defaultSize={20} minSize={1} maxSize={15} className="lg:block sm:hidden md:hidden">
            <RightSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;

