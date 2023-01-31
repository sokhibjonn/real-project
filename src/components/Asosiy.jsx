import React from "react";
import Yangiliklar from "./Yangiliklar";
import ForXorij from "./ForXorij";
import Vector from "../../src/images/Vector.png"
import Xorij from "./Xorij";
import Goblin from "./Goblin";
import Ozbek from "./Ozbek";
import Hind from "./Hind";
import Tarjima from "./Tarjima";
import Seriallar from "./Seriallar";

export default function Asosiy() {
    return (
        <>
            <div className="steal">
                <h1 className="types text ">Eng sara film,serial va <br />multfilmlar faqat bizda</h1>
                <button className="btn btn-warning myButt">Ko'rishni boshlash <img className="vector" src={Vector} alt="" /></button>
                </div>
            <Yangiliklar />
            <Xorij/>
            <Goblin/>
            <Ozbek/>
            <Hind/>
            <Tarjima/>
            <Seriallar/>

            {/* <ForXorij/> */}
        </>
    )
}