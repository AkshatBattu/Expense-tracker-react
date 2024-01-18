import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {

  const {transactions}  = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.Amount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);


  return (
    <div className='Balance'>

        <h2>Your Balance</h2>
        <h3>Rs{total}</h3>
       
      
    </div>
  )
}

export default Balance
