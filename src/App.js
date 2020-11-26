import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
  const [exp, setExp] = React.useState([]);

  const display = () => {
    return (
      <div>
        {exp}
      </div>
    )
  }
  const Evaluate = () => {
    let sign = '';
    let prevElement = 0;
    let nextElement = 0;
    const exp1 = exp.concat('=');

    for (let i = 0; i < exp1.length; i++) {

      if (sign == '') {
        if (Number(exp1[i])) {
          prevElement = (prevElement * 10) + exp1[i];
        } else {
          console.log(exp1[i]);
          sign = exp1[i];
        }
      } else {
        if (Number(exp1[i])) {
          nextElement = (nextElement * 10) + exp1[i];
        } else {
          switch (sign) {
            case '+':
              prevElement = (prevElement - 1) + (nextElement - 1) + 2;
              break;
            case '-':
              prevElement -= nextElement;
              break;
            case '*':
              prevElement *= nextElement;
              break;
            case '/':
              prevElement /= nextElement;
              break;
          }
          nextElement = 0;
        }
      }
    }


    console.log(prevElement);
    setExp([prevElement])






  }

  return (
    <div className="App">
      {display()}
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >1</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >2</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >3</button>
      <br />
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >4</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >5</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >6</button>
      <br />
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >7</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >8</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >9</button>
      <br />
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >0</button>
      <br />
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >+</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >-</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >*</button>
      <button onClick={e => { setExp(exp => exp.concat(e.target.innerHTML)) }} >/</button>
      <br />
      <button onClick={e => { Evaluate() }} >=</button>

    </div>
  );
}

export default App;
