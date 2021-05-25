import { CardContainer } from "../pods/card/CardHome.container";
import { TransactionContainer } from "../pods/transaction/TransactionHome.container";

export const HomePage : React.FC = () => {
  return(
    <>
      <CardContainer />
      <TransactionContainer/>
    </>
  ) 
};

