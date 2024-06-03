import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <div className="">
        <Link to="dashboard/users">Users</Link>
      </div>
    </div>
  )
}

export default SideBar
