import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';


ReactDom.render(
  <>
  <Card 
    imgsrc = "https://wallpaperaccess.com/full/1605477.jpg"
    sname = "Dark"
    title = "A Netflix Original Series"
    link = "https://www.netflix.com/bd/title/80100172"
  />
  <Card 
    imgsrc = "https://c4.wallpaperflare.com/wallpaper/436/197/281/dark-netflix-tv-series-netflix-abstract-3d-abstract-hd-wallpaper-preview.jpg"
    sname = "Extra Curricullar"
    title = "A Netflix Series"
    link = "https://www.netflix.com/bd/title/80100172"
  />
  <Card 
    imgsrc = "https://images.wallpapersden.com/image/wxl-louis-hofmann-and-lisa-vicari-netflix-dark_71760.jpg"
    sname = "dark2"
    title = "Netflix Original Series"
    link = "https://www.netflix.com/bd/title/80100172"
  />
    
  </>,
  document.getElementById('root')
);

