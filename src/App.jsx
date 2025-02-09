import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-black blue:bg-primary min-h-screen">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 ml-64 p-6">
          {/* Main content will go here */}
        </main>
      </div>
    </div>
  );
}

export default App;
