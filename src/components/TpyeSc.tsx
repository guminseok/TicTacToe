import React  , {useReducer} from 'react';

interface State {
   count: number 
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {// type: "setCount"
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };//value: state.count + 5
    default:
      throw new Error("Unknown action");
  }
}

export default function TpyeSc() {
  //initialState 初期値、stateReducerどういうふうにアップデートされるか表示
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

