import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import Contact from "../screens/Contact";
import About from "../screens/About";
import DIY from "../screens/DiyKitScreen";
import {Checkout} from "../screens/Checkout";

import Login from "../screens/LoginScreen";
import { Kit } from "../components/Kit";

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diy" element={<DIY />} />
      <Route path="/login" element={<Login />} />
      <Route path="/kit/:id" element={<Kit />} />
      <Route path="/checkout/:id" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
);
