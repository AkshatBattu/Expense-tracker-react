import React,  {useContext} from "react";
import { GlobalContext } from '../Context/GlobalState'

export const Transaction = ({ transaction }) => {
  const{ deleteTransaction } = useContext(GlobalContext);


  const sign = transaction.Amount < 0 ? "-" : "+";

  return (
    <li className={transaction.Amount < 0 ? "minus" : "plus"}>
      {transaction.text}

      <span>
        {sign}Rs{Math.abs(transaction.Amount)}
      </span>

      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">Delete</button>
    </li>
  );
};
