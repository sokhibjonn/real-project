import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from "./components/MyNavbar";
import Asosiy from "./components/Asosiy";
import Kategoriyalar from "./components/Kategoriyalar";
import YangilikDetails from "./components/YangilikDetails";
import XorijDetails from "./components/XorijDetails";
import ForYangiliklar from "./components/ForYangiliklar"
import GoblinDetails from "./components/GoblinDetails";
import OzbekDetails from "./components/OzbekDetails";
import HindDetails from "./components/XindDetails";
import TarjimaDetails from "./components/TarjimaDetails";
import SeriallarDetails from "./components/SeriallarDetails";



import ForXorij from "./components/ForXorij";
import ForGoblin from "./components/ForGoblin";
import ForOzbek from "./components/ForOzbek";
import ForHind from "./components/ForHind";
import ForTarjima from "./components/ForTarjima";
import ForSeriallar from "./components/ForSeriallar";
import FooterPage from "./components/FooterPage";
import "./style.css"

export default function App() {
  return (
    <>
      <BrowserRouter>

        <MyNavbar />
        <Routes>
          <Route path="/" element={<Asosiy />}></Route>
          <Route path="/yangiliklar" element={<ForYangiliklar />}></Route>
          <Route path="/yangiliklar/:id" element={<YangilikDetails />}></Route>
          <Route path="/kategoriya" element={<Kategoriyalar />}></Route>
          <Route path="/forgoblin" element={<ForGoblin />}></Route>
          <Route path="/forgoblin/:id" element={<GoblinDetails />}></Route>
          <Route path="/forxorij" element={<ForXorij />}></Route>
          <Route path="/forxorij/:id" element={<XorijDetails />}></Route>
          <Route path="/forozbek" element={<ForOzbek />}></Route>
          <Route path="/forozbek/:id" element={<OzbekDetails />}></Route>
          <Route path="/forhind" element={<ForHind />}></Route>
          <Route path="/forhind/:id" element={<HindDetails />}></Route>
          <Route path="/fortarjima" element={<ForTarjima />}></Route>
          <Route path="/fortarjima/:id" element={<TarjimaDetails />}></Route>
          <Route path="/forserial" element={<ForSeriallar />}></Route>
          <Route path="/forserial/:id" element={<SeriallarDetails />}></Route>


        </Routes>
        <FooterPage />
      </BrowserRouter>

    </>
  )
}