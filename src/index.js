import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterManager from './scenes/RouterManager'

const movies = [
  {
      id:1,
      content:'Alicia en el pais de las maravillas',
      date: '2020-05-30',
      important:true
  },
  {
      id:2,
      content:'Black Widow',
      date: '2020-05-30',
      important:false
  },
  {
      id:3,
      content:'Luca',
      date: '2020-05-30',
      important:true
  }
]
ReactDOM.render(
    <RouterManager movies={movies} />,
    document.getElementById('root')
);
