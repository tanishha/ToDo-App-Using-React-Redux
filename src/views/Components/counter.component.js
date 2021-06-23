import React from 'react'

const CounterComponent = () => {
    return (
        <div>
         <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" href="#" title="Decrement" ><span>-</span></a>
        <input name="quantity" type="number" className="quantity__input" value="0" />
        <a className="quantity__plus" href="#" title="Increment" ><span>+</span></a>
      </div>
  
          </div>
        </div> 
        </div>
    )
}

export default CounterComponent

