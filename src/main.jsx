import React from "react";
import ReactDOM from 'react-dom/client'
import { UserProvider } from "./Usercontext/UserContext.jsx";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
)
