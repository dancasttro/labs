'use strict'

import React, { Component } from 'react'
// import Title from './title'
import Square from './square'

class App extends Component{
  render () {
    return (
      // <div>
      //   {['blue','green','blue'].map((square, index) => (
      //     <Square key={index} color={square} />
      //   ))}
      // </div>
      <div className="container" onClick={(e) => {
        alert('Clicou')
      }}>
        <Square />
      </div>
    )
  }
}


// const App = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Title name='Daniel' lastname="Castro" />
//       </div>
//     )
//   }
// })

export default App
