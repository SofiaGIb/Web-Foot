import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <h1>LANDING</h1>
    </div>
  )
}

export default Landing
