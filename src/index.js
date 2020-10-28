import React from 'react';
import ReactDom from 'react-dom';
import FirstName, {LastName, myName, FullName} from './App';


ReactDom.render(
  <>
    <ol>
      <li>Navin</li>
      <li>{FirstName}</li>
      <li>{LastName}</li>
      <li>{myName()}</li>
      <li>{FullName()}</li>
    </ol>
  </>,
  document.getElementById('root')
);

