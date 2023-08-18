import { useState, useEffect } from "react";
import rr from './data.json';
import './style.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Add } from "./Redux/Actions";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    navigate(`/${e}`);
  }
  const handleClick1 = (e) => {
    console.log(e);
    dispatch(Add(e));
    navigate("/addtocart");
  }
  const handleClick2 = () => {
    navigate("/addtocart");
  }
  console.log(data);
  return (
    <div className="App">
      <div className="h0">
        <div className="h1">Trending Smartphones</div>
        <button className="hey" onClick={handleClick2}>Cart</button>
      </div>
      <div className="h2">
        {rr.map(e => {
          return <div style={{ borderBottom: "1px solid black" }} className="h3">
            <div className="h4">
              <div><img src={e.photo} alt="No" height="100px" /></div>

              <div>
                <span className="s1">Model:</span>
                <span className="s2">{e.name}</span>
              </div>

              <div>
                <span className="s1">Launch Year:</span>
                <span className="s2">{e.launch}</span>
              </div>
              <div>
                <span className="s1">Price:</span>
                <span>Rs.</span>
                <span >{e.price}</span>
              </div>
              <div className="h5" onClick={() => { handleClick(e.name) }}><span>...</span><span>more details</span></div>
              <div className="bt">
                <button onClick={() => { handleClick1(e) }}>BUY</button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
