import React from 'react'
import react, { useEffect, useState } from "react";
import cc from '../data.json';
import './style2.css';
import { useDispatch } from "react-redux";
import { Add } from '../Redux/Actions';
import { useNavigate, useParams } from "react-router-dom";


export default function Comp() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        setData(cc.filter((z) => {
            console.log(typeof(id));
            return z.id === +id;
        }));
        console.log(data);
    }, [id])
    const handleClick = (e) => {
        console.log(e);
        dispatch(Add(e));
        navigate("/addtocart");
    }
    console.log(cc);
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
