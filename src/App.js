import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import "./App.css";
import Login from "./main/login-page/Login";
import Home from "./main/home-page/Home";
import Cart from "./main/cart-page/Cart";
import Fav from "./main/fav-page/Detail";
import { stateContext } from "./main/context/contextState";
import { initial, stateReducer } from "./main/context/reducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initial); //
  // console.log(state  , "stateReducer");
  // dispatch ()

  return (
    <div className="App">
      <stateContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {state?.authenticated ? (
              <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="fav" element={<Fav />}></Route>
                <Route path="*" element={<Navigate to="home"></Navigate>}></Route>

              </Routes>
          ) : (
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
              </Routes>
          )}
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
}

export default App;
