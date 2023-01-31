import React from "react";
import MyImg from "../images/basmala.png"
import SecImg from "../images/Rectangle 87.png"
import ThirdImg from "../images/Rectangle 88.png"
import FourthImg from "../images/Vector (5).png"
import FifthImg from "../images/Vector (6).png"
import SixthImg from "../images/Vector (7).png"
import EightsImg from "../images/Vector (8).png"

export default function FooterPage() {
    return (
        <div className="myName neww">
            <div className="container">
                <div className="row">
                    <div className="col fuel"><img src={MyImg} alt="" />
                        <p className="newFor mt-2">YUKLAB OLING</p>
                        <img className="" src={SecImg} alt="" />
                        <img className="mt-3" src={ThirdImg} alt="" />
                    </div>
                    <div className="col fuel newFor">ASOSIY SAHIFALAR
                        <p className="forMyColor">Asosiy</p>
                        <p className="forMyColor">Yangiliklar</p>
                        <p className="forMyColor">Biz bilan aloqa</p>
                        <p className="forMyColor">Foydalanish shartlari</p>
                    </div>
                    <div className="col fuel">KATEGORIYALAR
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col forMyColor"><p> Tarixiy</p>
                            <p>Dramma</p>
                            <p>Klassika</p>
                            <p>Detektiv</p>
                            <p>Fantastik</p>
                            </div>
                            <div className="col forMyColor"><p>Qorqinchili</p>
                                <p>Biografiya</p>
                                <p>Sarguzasht</p>
                                <p>Komediya</p>
                                <p>Multfilm</p>
                                </div>
                            <div className="col forMyColor"><p>Triller</p>
                                <p>Melodramma</p>
                                <p>Jangari</p>
                                </div>
                        </div>
                    </div>
                    <div className="col fuel text-end forFooter">BIZ IJTIMOIY <br /> TARMOQLARDA <br />
                    <div className="forSpann"><img src={FourthImg} alt="" /><span className="forSpan"><img src={FifthImg} alt="" /></span><span className="forSpan"><img src={SixthImg} alt="" /></span><span className="forSpan"><img src={EightsImg} alt="" /></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}