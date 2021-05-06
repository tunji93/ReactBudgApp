import React from 'react'
import './App.css';
import Header from './components/Header'
import IncomeList from './components/IncomeList'
import ExpensesList from './components/ExpensesList'


function App() {
  
  return (
    <div>
      <Header />
      <div className="container clearfix">
        <IncomeList />
        <ExpensesList />

      </div>
          
    </div>
  );
}

export default App;
