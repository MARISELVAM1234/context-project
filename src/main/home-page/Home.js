import React, { useContext } from "react";
import { stateContext } from "../context/contextState";
import { useNavigate } from "react-router-dom";
import "./home.css"

const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  // console.log(state, "data");
  let cart = state.cartItem;
  // console.log(cart, "a");


const navigate = useNavigate()



  

  const addToCart = (val) => {
    console.log(val , "val");
    let cartValue = state.cart
  
    const isExit = cartValue.some((plusData) => val.id === plusData.id);
    console.log(isExit)
    if (isExit === true) {
      return val;
    } 
  else {
      return  dispatch ({type:"cart" , payload:([...cartValue , {...val ,qty :1}   ])})
    }
  };
  
  
  const FavCart = (value) => {
    let favorites= state.favorites

    const isExit =favorites.some((plusData) => value.id === plusData.id);
    console.log(isExit)
    if (isExit === true) {
      return value;
    } 
  else {
      return  dispatch ({type:"fav" , payload:([...favorites , {...value }   ])})
    }

  };


const navi = () =>{
  navigate("/cart")
}
const fav = () =>{
  navigate("/fav")
}

const logout = () =>{
  dispatch ({type:"login" , payload: false})
  localStorage.setItem("isLoggedIn" , JSON.stringify(false)) ;

}

  return (
    <div className="product-list">
      <h1>PRODUCT LIST</h1>

    <div className="product">
      {cart.map((ele, index) => (
        <div key={index} className="product-view">
          <img src={ele.pic } alt=""></img>
          <p>{ele.features}</p>
          <div className="icon">
          <i  id = "icon-1" onClick={() => addToCart(ele)} className="fa fa-cart-plus" aria-hidden="true"></i>
          <i  id="icon-2" onClick={() => FavCart(ele)} className="fa fa-heart" aria-hidden="true"></i>
          </div>
        </div>
      ))}
    </div>
    <button id="btn1" className="nav-btn"
          onClick={() => {
            navi();
          }}
        >
          VIEW CART
        </button>
        <button id="btn2" style={{marginLeft:"20px"}} className="nav-btn"
          onClick={() => {
            fav();
          }}
        >
          FAV ITEM
        </button>
        <button className="nav-btn" style={{marginLeft:"20px"}} onClick={()=>logout()}>LOGOUT</button>
    </div>
  );
};

export default Home;
