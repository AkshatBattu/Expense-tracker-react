import './App.css';
import React from 'react';
import Balance from './component/Balance';
import IncomeExpense from './component/IncomeExpense';
import TransactionList from './component/TransactionList';
import AddNewTransaction from './component/AddNewTransaction';
import { GlobalProvider } from './Context/GlobalState';
import AppReducer from './Context/AppReducer';



function App() {
 
  return (
    <GlobalProvider>
  <div className="App">
    <h1>My Expense Tracker</h1>
     <Balance />
     <IncomeExpense />
     <TransactionList />
     <AddNewTransaction />
    
    </div>
    </GlobalProvider>
  
  );
}

export default App;
