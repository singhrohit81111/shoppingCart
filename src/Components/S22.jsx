import React, { useState, useEffect } from "react";
import cc from '../data.json';
import './style2.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Add } from "../Redux/Actions";

export default function S22() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setData(cc.filter(e => {
            return e.id === 3;
        }));
        console.log(data);
    }, [])
    const handleClick = (e) => {
        console.log(e);
        dispatch(Add(e));
        navigate("/addtocart");
    }
    return (
        <div className="i1">
            {data.map(e => {
                return <div className="i2">
                    <div className="i3"><img className="ig" src={e.photo} alt="No Image" /></div>
                    <div className="parent">
                        <div className="i5">{e.name}</div>
                        <div className="i4">{e.launch}</div>
                        <div className="i6"><span>Rs.</span>{e.price}</div>
                        <div className="i7">{e.details}</div>
                        <div className="i8"><button onClick={() => { handleClick(e) }}>Buy Now</button></div>
                    </div>
                </div>
            })}
        </div>
    )
}