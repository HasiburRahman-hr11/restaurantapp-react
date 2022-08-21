import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreatItemContainer } from "./Components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFuntions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";
const App = () => {
  const [state, dispatch] = useStateValue();

 

  useEffect(() => {
    const fetchFoods = async () => {
      await getAllFoodItems().then((data) => {
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          payload: data,
        });
      });
    };

    fetchFoods();
   
  }, [dispatch]);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="w-full p-8 px-4 py-4 mt-14 md:mt-20 md:px-16">
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
