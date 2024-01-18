import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddNewTransaction = () => {
    const[Text, setText] = useState('');
    const[Amount, setAmount] = useState(0);
    const{ addTransaction } = useContext(GlobalContext);


    const onSubmit = e =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        Text,
        Amount: +Amount
      }

      addTransaction(newTransaction);
    }


  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>

        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input type="text"  value={Text} onChange={(e) => setText(e.target.value)}  
             placeholder='Enter Text.....'></input>
        </div>

        <div className='form-control'>
            <label htmlFor="amount">Amount <br/>
            (negative - expense, positive - income)
            </label>
            <input type="number"  value={Amount} onChange={(e) => setAmount(e.target.value)} 
             placeholder='Enter amount.....'></input>
        </div>

        <button className="btn">Add Transaction</button>

      </form>

    </>
  )
}

export default AddNewTransaction
