import { CategoryScale } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Doughtnut } from "../../models/analytic-doughtnut/doughtnut.model";

interface Props {
  analyticDoughtnut: any;
}
export const DoughtnutComponent: React.FC<Props> = (props) => {
  const { analyticDoughtnut } = props;

  const [state, setState] = React.useState<any>(analyticDoughtnut);

  React.useEffect(() => {
    setState(analyticDoughtnut);
    console.log(state.totalExpenses);
  }, [state, analyticDoughtnut]);

  React.useEffect(() => {
    setState(analyticDoughtnut);
    if (state.categoryAnalytic !== undefined) {
      for (let index = 0; index < state.categoryAnalytic.length; index++) {
        const element = state.categoryAnalytic[index];
        console.log(element);
      }
    }
  }, [state, analyticDoughtnut]);

  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [state.totalExpenses, state.totalExpenses, state.totalExpenses],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div style={{ width: "60%", height: "60%" }}>
      <Doughnut type="doughnut" data={data} />
    </div>
  );
};
