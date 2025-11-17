import { Hero } from "./hero";
import { SidebarComponent } from "./sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="mr-10">
        <SidebarComponent />
      </div>

      <div>
        <Hero />
      </div>
    </div>
  );
}