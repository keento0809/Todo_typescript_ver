import React from "react";
import Main from "./components/Main/Main";
import TaskProvider from "./contexts/TaskProvider";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Main />
      </TaskProvider>
    </div>
  );
}

export default App;
