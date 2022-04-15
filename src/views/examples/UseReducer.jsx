import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "multi":
      return { ...state, number: state.number * 7 };
    case "divide":
      return { ...state, number: parseInt(state.number / 25) };
    case "addN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Nilton" })}
          >
            Login
          </button>
          <button className="btn" onClick={() => dispatch({ type: "add2" })}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "multi" })}>
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "divide" })}>
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addN", payload: 8 })}
          >
            8
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
