import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Inputs from  './components/Inputs'
import Expenses from './components/Expenses'
import Income from  './components/Income'

function App() {
  const [income,setIncome] = useState([])
  const [expenses,setExpenses] = useState([])
  const [renderInc, setRenderInc] = useState([])
  const [renderExp, setRenderExp] = useState([])
  const [totalInc, setTotalInc] = useState(0)
  const [totalExp, setTotalExp] = useState(0)
  
  

  const manageData = (data) => {
    if (data.type === "inc" ) {
      setIncome([...income, data])
      setTotalInc(prev=> prev+ parseInt(data.val))
      
    }
    else {
      setExpenses([...expenses, data])
      setTotalExp(prev=> prev+ parseInt(data.val))
    }
    
}

 const deleteIncItem = (item) => {
   const newList = income.filter((items)=> items.id !== item)
   setIncome(newList)
 }

 const deleteExpItem = (item) => {
  const newList = expenses.filter((items)=> items.id !== item)
  setExpenses(newList)
}
 useEffect(()=> {
  const Inc = income.map((obj)=> <Income key={obj.id} obj={obj} handleClick = {deleteIncItem} />)
  setRenderInc(Inc)
  const Exp = expenses.map((obj)=> <Expenses key={obj.id} obj={obj} handleClick = {deleteExpItem} />)
  setRenderExp(Exp)
 }, [income, expenses])

  
  return (
    <div>
      <Header  totalInc={totalInc} totalExp={totalExp}/>
      <Inputs exportInputs = {manageData} />
      <div className="container clearfix">
          <div className="income">
            <h2 className="icome__title">Income</h2>
                    
            <div className="income__list">
               {renderInc}
            </div>
          </div>
          <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
                {renderExp}
            </div>
                
          </div>
      </div>
          
    </div>
  );
}

export default App;
