import React, { useEffect, useState } from "react";
import Image2 from "../../src/images/Vector (2).png"
import Basmala from "../images/Rectangle 82.png"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Yangiliklar() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9000/basmala')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="neww">
            <div className="new container">
                <div className="row">
                    <div className="text-center"><h1 className="newFor">Yangiliklar </h1></div>
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        posts.map(post => {
                            return (
                                <div key={post.id} className="col-md-3 mt-3">
                                    <div className="card">
                                        <Link to={`/yangiliklar/${post.id}`}>
                                            <div className="card">
                                                <img
                                                    alt="Sample"
                                                    src={Basmala}
                                                />
                                            </div>
                                        </Link>
                                        <p className="nest mt-1"> {post.name}</p>
                                        <span className="nest"> <img src={Image2} alt="" />   {post.date}</span>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}