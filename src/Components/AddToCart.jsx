import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style2.css';
import { Delete } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';

export default function AddToCart() {
    const CartChange = useSelector(e => e.CartChange);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(data);
    useEffect(() => {
        setData(CartChange)
    }, [CartChange])

    const handleClick3 = (e) => {
        dispatch(Delete(e));
    }
    const handleClick1 = (e) => {
        setData(data.map(z => {
            if (z.id === e && z.quantity > 1) {
                console.log(z.quantity);
                return { ...z, quantity: z.quantity - 1 };
            }
            return z;
        }))
    }
    const handleClick2 = (e) => {
        setData(data.map(z => {
            if (z.id === e) {
                console.log(z.quantity);
                return { ...z, quantity: z.quantity + 1 };
            }
            return z;
        }))
    }
    const handleClick = () => {
        navigate("/");
    }
    const total = data.map(e => { return e.quantity * e.price });
    const ag = total.reduce((acc, e) => { return acc + e }, 0);
    const length = data.length;
    console.log(ag);
    return (
        <div className='cc1'>
            <div className='rt0'>
                <div className='rt1'>Cart</div>
                <button className='rt2' onClick={handleClick}>Home</button>
            </div>
            {data.map(e => {
                return <div className='cc2'>
                    <div className='cc3'>
                        <div className='cy'><img className='z5' src={e.photo} alt="no image" /></div>
                        <div className='cc5'>
                            <div className='dt1'>{e.name}</div>
                            <div className='dt2'>{e.launch}</div>
                            <div className='dt3'><span>Rs.</span>{e.price}</div>
                            <div className='dt4'>
                                <button onClick={() => { handleClick1(e.id) }}>-</button>
                                <span>{e.quantity}</span>
                                <button onClick={() => { handleClick2(e.id) }}>+</button>
                            </div>
                            <div className='dt5'>
                                <button onClick={() => { handleClick3(e) }}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
            {data.length === 0 && <div className='mm'>Add items in the cart</div>}
            {data.length>0 && <div className='ch3'>
                <div className='pd0'>
                    PRICE DETAILS:
                </div>
                <div className='pd1'>
                    <div className='pd11'>Price<span>({length} item)</span></div>
                    <div className='pd12'><span>Rs.</span>{ag}</div>
                </div>
                <div className='pd2'>
                    <div className='pd21'>Disocunt</div>
                    <div className='pd22'> 10%</div>
                </div>
                <div className='pd3'>
                    <div className='pd31'>Delivery Charges</div>
                    <div className='pd32'>Free</div>
                </div>
                <div className='pd4'>
                    <div className='pd41'>Total Amount</div>
                    <div className='pd42'><span>Rs.</span>{ag}</div>
                </div>
                <div className='lt0'>
                    <button className='lt1'>Place Order</button>
                </div>
            </div>}
        </div>
    )
}
