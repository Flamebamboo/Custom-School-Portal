import ThemeSystem from "/src/components/ThemeSystem.jsx";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div
      class={`fixed top-0 left-0 h-full bg-foreground shadow-lg ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      {/* toggle button open and close */}
      <button
        class="absolute -right-10 top-5 bg-foreground p-3 rounded-r-lg shadow-md 
        hover:bg-accent focus:outline-none"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span class="text-white text-xl">{"="}</span>
      </button>

      {/* list nav and stuff */}
      <nav class="pt-16">
        <ul class="space-y-2 px-3">
          <li>
            <ThemeSystem isCollapsed={isCollapsed} text={"Custom Theme"} />
          </li>
          {["quick1", "quick2", "quick3", "quick4", "quick5"].map((item) => (
            <li
              key={item}
              class={`p-3 rounded-lg flex items-center justify-start hover:bg-accent cursor-pointer 
                transition-colors duration-200 text-primary font-type
                ${isCollapsed ? "text-center" : "px-4"}`}
            >
              {isCollapsed ? item[0] : item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
