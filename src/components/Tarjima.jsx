import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import Seriallar from "../components/Seriallar";
import Image from "../../src/images/Vector (1).png"
import Image3 from "../../src/images/Vector (3).png"
import Image4 from "../../src/images/Vector (4).png"
import Tarjima from "../images/Rectangle 82 (5).png"
import axios from "axios"
import { Link } from "react-router-dom"


export default function Tarjimaa() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/tarjima')
            // .then(response => response.json())
            .then(res => {
                const filteredAPI = res.data.slice(0, 6)
                setPosts(filteredAPI)
                // setPosts(res.data)
                // console.log(json);
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="new container">
            <div className="row">
                <div className="col-md-8"><h1 className="newFor mt-5">Xorij kino tarjimasi </h1></div>
                <div className="col-sm-4 text-end"><Link to="/fortarjima"> <Button className="wierd mt-5">Barchasi <img className="small" src={Image} alt="" /></Button></Link></div>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
                {
                    posts.map(post => {
                        return (
                            <div key={post.id} className="col-md-2 mt-3">
                                <div className="card">
                                    <Link to={`/fortarjima/${post.id}`}>
                                        <div className="card">
                                            <img
                                                alt="Sample"
                                                src={Tarjima}
                                            />
                                        </div>
                                    </Link>
                                    <p className="nest mt-3"> {post.name}</p>
                                    <span className="nest"> <img src={Image3} alt="" /><span className="forfive">5</span><img className="img4" src={Image4} alt="" /><span className="forfive">5</span>   </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}