import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase'

const Home = () => {
    const userSignOut = () => {
        signOut(auth)
    }
  return (
      <div>
          <h1>Hello World</h1>
          <button onClick={userSignOut}>Sign Out</button>
    </div>
  )
}

export default Home