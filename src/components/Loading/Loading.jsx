import React from "react";

import "./Loading.scss";

const Loading = () => (
  <div className="loading">
    <div className="preloader" data-testid="loading">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    Carregando
  </div>
);

export default Loading;
