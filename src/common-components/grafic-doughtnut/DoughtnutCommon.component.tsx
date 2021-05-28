import React from "react";
import { Doughnut } from "react-chartjs-2";
import NumberFormat from "react-number-format";

interface Props {
  analyticDoughtnut: any;
}

export const DoughtnutCommonComponent: React.FC<Props> = (props) => {
  const { analyticDoughtnut } = props;

  const [state, setState] = React.useState<any>(analyticDoughtnut);

  React.useEffect(() => {
    setState(analyticDoughtnut);
  }, [state, analyticDoughtnut]);

  let dataCategory: any = [];
  let nameCategory: any = [];
  let categories: any = [];

  if (state.categoryAnalytic) {
    categories = state.categoryAnalytic;
    for (let index = 0; index < state.categoryAnalytic.length; index++) {
      dataCategory.push(state.categoryAnalytic[index].expenses);
      nameCategory.push(state.categoryAnalytic[index].nameCategory);
    }
  }

  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: dataCategory,
        backgroundColor: [
          "#C73874",
          "#7B79E3",
          "#7DF1D5",
          "#73CAA5",
          "#F5D78C",
          "#EA6D64",
        ],
        hoverOffset: 4,
        radius: "90%",
      },
    ],
  };

  const colors = (nameCategory: string) => {
    switch (nameCategory) {
      case "Gasolina":
        return "#C73874";
      case "Servicios":
        return "#7B79E3";

      case "Ropa":
        return "#7DF1D5";
      case "Electronica":
        return "#73CAA5";
      case "Restaurantes":
        return "#F5D78C";

      default:
        return "#EA6D64";
    }
  };

  return (
    <div  style={{ width: "100%"}}>
      <div className="container-flex">
        <Doughnut type="doughnut" data={data} />
        <span style = {{marginTop: '8%'}}>
          {categories.map((item: any, key: number) => (
            <div key = {key}>
              <div
                style={{
                  display: "flex",
                  minWidth: '200px',
                  minHeight:'15px',
                  marginTop: "5%",
                  marginLeft: "15%",
                  height: "2vh",
                }}
              >
                <div
                  style={{
                    height: " 80%",
                    width: "20px",
                    marginRight: "8%",
                    backgroundColor: `${colors(item.nameCategory)}`,
                    borderRadius: "20%",
                    paddingRight: "5%",
                  }}
                >
                  {`${" "}`}
                </div>
                <div style={{ flex: " 1 1 auto" }}> {item.nameCategory} </div>
                <div
                  style={{
                    flex: " 1 1 auto",
                    textAlign: "right",
                  }}
                >
                  <NumberFormat
                    value={item.expenses}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"€"}
                    fixedDecimalScale={true}
                    decimalScale={2}
                  />
                </div>
              </div>
            </div>
          ))}
        </span>
      </div>
    </div>
   
  );
};
