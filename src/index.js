import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const name = "Nizam Uddin";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
const img4 = "https://picsum.photos/200/300";
const link = "https://google.com";

ReactDOM.render(
  <>

    <h1 className="heading">My name is {name}</h1>
    <div className="div_image">
      <a href={link} target=" " >
        <img src={img1} alt="Random Image" />
        <img src={img2} alt="Random Image" />
        <img src={img3} alt="Random Image" />
        <img src={img4} alt="Random Image" />
      </a>
    </div>



    
  </>,
  document.getElementById('root')
);


