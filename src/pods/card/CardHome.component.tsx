import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/routes/routes";

import { CardCommonContainer } from "../../common-components/card/CardCommon.container";

export const CardHomeComponent: React.FC = () => {
  return (
    <div className="box-margin-b">
      <div className="title-box">
        <div className="container-flex">
          <span className="text-align-flex-h">Tarjetas</span>
          <Link to={switchRoutes.cards} className="text-link">
            Ver tarjetas
          </Link>
        </div>
      </div>
      <CardCommonContainer />
    </div>
  );
};
