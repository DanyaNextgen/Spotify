import Header from "@/components/custom/Header";
import Sidebar from "@/components/custom/Sidebar";
import Content from "@/components/custom/Content";
import Footer from "@/components/custom/Footer";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const SpotifyDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="flex-grow">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={35}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle className="w-1 bg-transparent hover:bg-white" />
        <ResizablePanel defaultSize={80}>
          <Content />
        </ResizablePanel>
      </ResizablePanelGroup>
      <Footer />
    </div>
  );
};

export default SpotifyDashboard;

