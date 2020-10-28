import React from 'react';


function add (a, b){
  add = a + b;
  return add
}

function sub (a, b){
  sub = a - b;
  return sub
}

function mul (a, b){
  mul = a * b;
  return mul
}

function div (a, b){
  let div = a / b;
  div = div.toFixed(2);
  return div
}

export { add, sub, mul, div };