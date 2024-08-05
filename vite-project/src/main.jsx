import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const username = "chai aur react"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click me to visit google',
  username
)


ReactDOM.createRoot(document.getElementById('root')).render(

  <App />


  // <React.StrictMode>    {/* specific for development for optimization */}
    // {/* <App /> */}
    // {/* <MyApp /> */}
    // {/* MyApp() */}

    // anotherElement

    // reactElement

  // {/* </React.StrictMode>, */}
)
