import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Basmalaaa from "../images/Rectangle 82 (2).png"
import Image4 from "../../src/images/image 4.png"
import Image5 from "../../src/images/Vector (9).png"
import axios from "axios";

export default function GoblinDetails() {
    const [items, setItems] = useState([]);
    const { id } = useParams()

    useParams(() => {
        axios.get(`http://localhost:9000/forgoblin/${id}`)
            .then(res => {
                setItems(res.data)
            })
            .catch(err => console.log(err));
    }, [id])
    return (
        <div className="new container">
            <div className="row">
                <div className="col">
                    <Link to="/forgoblin"><button className="btn btn colButton"><img className="imgVector" src={Image5} alt="" />Orqaga qaytish</button></Link>

                    <h2 className="cardtext">Basmala tvda qanday qilib premium sotib olsa boladi?</h2>
                    <p className="text-white mt-5 forLorem">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of type <br />
                        and scrambled it to make a type specimen book. It has survived not <br />
                        only five centuries, but also the leap into electronic typesetting, <br />
                        remaining essentially unchanged.</p>

                    <p className="text-white forLoremm">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of type <br />
                        and scrambled it to make a type specimen book. It has survived not <br />
                        only five centuries, but also the leap into electronic typesetting, <br />
                        remaining essentially unchanged.</p>

                    <p className="text-white forLorem mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s, when an unknown printer took a galley of type <br />
                        and scrambled it to make a type specimen book. It has survived not <br />
                        only five centuries, but also the leap into electronic typesetting, <br />
                        remaining essentially unchanged.</p>
                </div>
                <div className="col">
                    <h1 key={id}></h1>
                    <div className="card">
                        <img
                            className="mainImg"
                            alt="Sample"
                            src={Basmalaaa}
                        />
                        <img className="mt-4" src={Image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}