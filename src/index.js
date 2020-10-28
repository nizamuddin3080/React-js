import React from 'react';
import ReactDom from 'react-dom';
import { add, sub, mul, div } from './Calc';


ReactDom.render(
  <>
    <ul>
      <li>{add(2,3)}</li>
      <li>{sub(30,3)}</li>
      <li>{mul(10,3)}</li>
      <li>{div(10,3)}</li>
    </ul>
  </>,
  document.getElementById('root')
);

