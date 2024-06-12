import React from 'react'
import prototypes from 'prop-types'  //having the instance of prop-types in prototypes


export default function Navbarr(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

  )
}

Navbarr.prototypes={     //defining that only string types of props are used in title and abouttext     
  title: prototypes.string.isRequired,   // isRequired because title must be given
  aboutText: prototypes.string
}



