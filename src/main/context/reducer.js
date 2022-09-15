export const initial = {
  cartItem: [
    {
      id:1,
      head: "laptop brand",
      pic: require("../../assets/1.webp"),
      features:
        " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
    },
    {
      id:2,
      head: "laptop brand",
      pic: require("../../assets/2.jpg"),
      features:
        " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
    },
    {
      id:3,
      head: "laptop brand",
      pic: require("../../assets/3.jpg"),
      features:
        " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
    },
    {
      id:4,
      head: "laptop brand",
      pic: require("../../assets/4.jpg"),
      features:
        " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
    },
  ],
  cart : [],
  favorites :[],
  authenticated :  JSON.parse(localStorage.getItem('isLoggedIn'))|| false ,
};

export const stateReducer = (state = initial, action) => {
  console.log(action,"action");
  // console.log(initial , "str");
  switch (action.type) {
    case "cart": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "fav": {
      return {
        ...state,
        favorites : action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        authenticated  : action.payload,
      };
    }
    default: {
      return state;
    }

  }
 
  // return state ;
};
