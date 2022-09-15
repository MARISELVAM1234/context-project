import React, { useContext } from "react";
import { stateContext } from "../context/contextState";
import "./cart.css"

const Cart = () => {
  const { state, dispatch } = useContext(stateContext);
  let cartData = state.cart;

  // to add qty
  const plusQty = (el) => {
    const item = cartData.map((value) => {
      if (value.id === el.id) {
        return {
          ...value,
          qty: value.qty + 1,
        };
      } else {
        return value;
      }
    });
    dispatch({ type: "cart", payload: item });
  };

  // to decrease the qty
  const minusQty = (minus) => {
    if (minus.qty > 1) {
      const isExit = cartData.some((plusData) => minus.id === plusData.id);
      if (isExit === true) {
        const item = cartData.map((value) => {
          if (value.id === minus.id) {
            return {
              ...value,
              qty: value.qty - 1,
            };
          } else {
            return value;
          }
        });
        dispatch({ type: "cart", payload: item});
      }
    } else {
      const eraseZero = cartData.filter((data) => {
        return data !== minus;
      });
      dispatch({ type: "cart", payload: eraseZero });
    }
  };

  //  to remove the element
  const removeCart = (removeC) => {
    const eraseEle = cartData.filter((data) => {
      return data !== removeC;
    });
    dispatch({ type: "cart", payload: eraseEle});
  };

  // console.log(cartData);

  return (
    <div className="product-list">
      <h1>PRODUCT LIST</h1>

      <div className="product">
        {cartData.map((ele, index) => (
          <div key={index} className="product-view">
            <img src={ele.pic} alt=""></img>
            <p>{ele.features}</p>
            <div className="cart-btn">
              <h2> qty : {ele.qty}</h2>
              <button 
                onClick={() => {
                  plusQty(ele);
                }}
              >
                +
              </button>
              <button id="remove"
                onClick={() => {
                  removeCart(ele);
                }}
              >
                REMOVE CART
              </button>
              <button
                onClick={() => {
                  minusQty(ele);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
