import React , {useContext} from 'react'
import { stateContext } from "../context/contextState"; 

const Fav= () => {
  const { state , dispatch} = useContext(stateContext);

  let cartData = state.favorites
  console.log(cartData);

//  to remove the element
const remove = (removeC) => {
  const eraseEle = cartData.filter((data) => {
    return data !== removeC;
  });
   dispatch ({type:"fav" , payload:([...eraseEle])})
};


  return (
    <div className="product-list">
    <h1>FAVORITE LIST ITEM</h1>

  <div className="product">
    {cartData.map((ele, index) => (
      <div key={index} className="product-view">
        <img src={ele.pic } alt=""></img>
        <p>{ele.features}</p>
        <div className="btn">
        <button  id = "first-btn" className='nav-btn' onClick={() =>{remove(ele)}}>REMOVE CART</button>
        
        </div>
      
      </div>
    ))}
  </div>
 
  </div>
);
}

export default Fav