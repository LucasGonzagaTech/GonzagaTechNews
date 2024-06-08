import React from "react";
import './styles.css';

export default () => {
    return(
        <header className="header">
  {/* <div className="logo">
    <img src="/logo.png" alt="Logo" />
  </div> */}
  <nav className="nav">
    <h1>ImprovisadoNews</h1>
  </nav>
  <div className="search">
    <input type="text" placeholder="Buscar" />
    <button type="submit">Buscar</button>
  </div>
</header>

    )
}