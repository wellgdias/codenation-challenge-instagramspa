import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/img/instagram-logo.svg";

import { FaUsers, FaUserPlus } from "react-icons/fa";

import "./Topbar.scss";

const Topbar = () => (
  <header className="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo" data-testid="topbar">
        <LogoSvg alt="Logo Instagram" />
      </Link>
      <div className="topbar__group">
        <button className="topbar__icon">
          <Link to="/users">
            <FaUsers />
            <span>Usuários</span>
          </Link>
        </button>
        <button className="topbar__icon">
          <Link to="/newuser">
            <FaUserPlus />
            <span>Nova conta</span>
          </Link>
        </button>
      </div>
    </div>
  </header>
);

export default Topbar;
