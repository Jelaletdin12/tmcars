import { useState } from "react";

import Router from "./routes/routes";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
