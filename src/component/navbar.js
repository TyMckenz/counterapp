import React from 'react'

export default function NavBar({totalCounters}) {
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" />
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
            {totalCounters}
        </span>
Items
    </div>
</nav>
  )
}
