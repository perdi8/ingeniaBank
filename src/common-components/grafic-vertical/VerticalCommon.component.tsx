import React from "react";
import { Bar } from "react-chartjs-2";

interface Props {
  analyticVertical: any;
}

export const VerticalCommonComponent: React.FC<Props> = (props) => {
  const { analyticVertical } = props;

  const [state, setState] = React.useState<any>(analyticVertical);

  React.useEffect(() => {
    setState(analyticVertical);
  }, [state, analyticVertical]);

  let dataCategory: any = [];
  let nameCategory: any = [];

  if (state.categoryAnalytic) {
    for (let index = 0; index < state.categoryAnalytic.length; index++) {
      dataCategory.push(state.categoryAnalytic[index].expenses);
      nameCategory.push(state.categoryAnalytic[index].nameCategory);
    }
  }

  const data = {
    labels: [
      "Gasolina",
      "Servicios",
      "Ropa",
      "Electronica",
      "Restaurantes",
      "Otros",
    ],
    datasets: [
      {
        label: `${new Date()
          .toLocaleString("es-ES", { month: "long" })
          .toUpperCase()}`,
        data: dataCategory,
        backgroundColor: [
          "#C73874",
          "#7B79E3",
          "#7DF1D5",
          "#73CAA5",
          "#F5D78C",
          "#EA6D64",
        ],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Bar type="bar" data={data} options={options} />
    </div>
  );
};
