import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreatItemContainer } from "./Components";
const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="w-full h-full p-8 mt-24">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreatItemContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
export default App;
