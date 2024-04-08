import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">Actions in Warpcast</a>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Submit an Action</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar