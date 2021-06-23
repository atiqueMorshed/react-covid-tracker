import React, { useState } from "react";

import AppHeader from "./components/app-header/app-header.component";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <AppHeader />
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>INC</button>
    </div>
  );
};

export default App;
