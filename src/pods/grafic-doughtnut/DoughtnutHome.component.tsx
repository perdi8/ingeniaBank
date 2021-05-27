
import React from "react";
import { DoughtnutCommonContainer } from "../../common-components/grafic-doughtnut/DoughtnutCommon.container";


export const DoughtnutHomeComponent: React.FC = () => {
  return (
    <div
    style={{
      width: "45%",
      paddingRight: "10%",
      marginTop:'5%'
    }}
    >
      <DoughtnutCommonContainer/>
    </div>
  );
};
