import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText } from "reactstrap";
import Image from "../../src/images/Vector (1).png"
import Image2 from "../../src/images/Vector (2).png"
import Basmala from "../images/Rectangle 82.png"
import axios from "axios"
import { Link } from "react-router-dom"
import Vector from "../../src/images/Vector.png"
import Xorij from "./Xorij";
import Goblin from "./Goblin";
import Ozbek from "./Ozbek";
import Hind from "./Hind";
import Tarjima from "./Tarjima";
import Seriallar from "./Seriallar";

export default function Yangiliklar() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/basmala')
            .then(res => {
                const filteredAPI = res.data.slice(0, 4)
                setPosts(filteredAPI)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="neww">
            <div className="new container">
                <div className="row">
                    <div className="col-md-8"><h1 className="newFor">Yangiliklar </h1></div>
                    <div className="col-sm-4 text-end"><Link to="/yangiliklar"> <Button className="wierd">Barchasi <img className="small" src={Image} alt="" /></Button></Link></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        posts.map(post => {
                            return (
                                <div key={post.id} className="col-md-3 mt-3">
                                        <Link to={`/yangiliklar/${post.id}`}>
                                        <div className="card">
                                            <img
                                                alt="Sample"
                                                src={Basmala}
                                            />
                                        </div>
                                        </Link>
                                        <p className="nest mt-2"> {post.name}</p>
                                        <span className="nest"> <img src={Image2} alt="" />   {post.date}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}