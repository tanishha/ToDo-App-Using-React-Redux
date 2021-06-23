import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Incfunc, Decfunc } from "../../actions";

const CounterComponent = () => {
  const currentState = useSelector((state) => state.number);
  const dispatch=useDispatch();
  return (
    <div>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" href="#" title="Decrement" onClick={() => dispatch(Decfunc())}>
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="number"
              className="quantity__input"
              value={currentState}
            />
            <a className="quantity__plus" href="#" title="Increment" onClick={() => dispatch(Incfunc())}>
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
