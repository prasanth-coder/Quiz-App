import React from 'react'
import UserContextProvider from './Context/UserContext'
import  Header  from './Component/Header'

function App() {
  return (
    <UserContextProvider>
         <Header />
         
        
    </UserContextProvider>
  )
}

export default App