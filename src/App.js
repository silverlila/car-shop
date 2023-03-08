import React from "react";
import { AppLayout } from "./components/layout";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./features/homepage";
import { Contact } from "./features/contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
export default App;
