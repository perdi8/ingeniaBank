import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import { Balance } from "../../models/analytic-balance/Balance.model";
import { Data, Options } from "../../models/analytic-balance/DataBalance.model";

interface Props {
  analytic: Balance[];
  dataPeriod: string[];
  typePeriod: number;
}

export const AnalyticBalanceCommonComponent: React.FC<Props> = (props) => {
  const { analytic, dataPeriod, typePeriod } = props;
  const [stateAnalytic, setStateAnalytic] = useState<Balance[]>(analytic);

  useEffect(() => {
    setStateAnalytic(analytic);
  }, [analytic, stateAnalytic]);

  let month = new Date().getUTCMonth() + 1;

  const analyticData: number[] = [];

  if (stateAnalytic.length > 0) {
    if (typePeriod === 1) {
      let lastBalance = stateAnalytic[0].balance;
      for (let i = 0; i < new Date().getDate(); i++) {
        let date = new Date(new Date().getUTCFullYear(), month - 1, i + 1)
          .toISOString()
          .slice(0, 10);
        let filter = stateAnalytic.filter((analytic) => analytic.date === date);

        if (filter.length > 0) {
          analyticData.push(filter[0].balance);
          lastBalance = filter[0].balance;
        } else {
          analyticData.push(lastBalance);
        }
      }
    } else {
      let lastBalance = stateAnalytic[0].balance;
      for (let i = 1; i <= month; i++) {
        let date =
          new Date(new Date().getUTCFullYear(), i, 1).getUTCMonth() + 1;
        let dateToSearch = date < 10 ? `0${date}` : `${date}`;

        let filter = stateAnalytic.filter(
          (analytic) => analytic.date.split("-")[1] === dateToSearch
        );

        if (filter.length > 0) {
          analyticData.push(filter[filter.length - 1].balance);
          lastBalance = filter[filter.length - 1].balance;
        } else {
          analyticData.push(lastBalance);
        }
      }
    }
  }

  const data: Data = {
    labels: dataPeriod,
    datasets: [
      {
        label:
          typePeriod === 1
            ? `${new Date()
                .toLocaleString("es-ES", { month: "long" })
                .toUpperCase()}`
            : new Date().getUTCFullYear(),
        data: analyticData,
        fill: true,
        backgroundColor: "#e05c93",
        borderColor: "#d01e69",
        tension: 0.5,
      },
    ],
  };

  const options: Options = {
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

  return <Line type="line" data={data} options={options} />;
};
