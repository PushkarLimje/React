import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type : 'a',
//     props :{
//         href: 'https://youtube.com',
//         target : '_blank',   
//     },
//     Children: 'Click here to visit YouTube',
// }

const newReactElement = "__hello !! there"

const reactElement = React.createElement(
    'a',      // type of element
    {href: 'https://youtube.com',  target: '_blank'},  // props of the element ,attributes
    'Visit YouTube ',   // children of the element
    newReactElement     //variable with string value   
)




const anotherElement = (
   <a href="https://google.com" target= '_blank'>visit google</a>
)



ReactDOM.createRoot(document.getElementById('root'))
  .render(    
    //   <App />   
      // anotherReactElement 
      reactElement
  )
