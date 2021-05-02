import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Inputs from  './components/Inputs'
import Expenses from './components/Expenses'
import Income from  './components/Income'

function App() {
  //const incList = []
  //const expList = []
  //const newIncList = incList.map(item => <Income key={} obj={item} />)
  //const newExpList = expList.map(item => <Expenses obj = {item} />)
   const [incList, setIncList] = useState([])
   const [expList, setExpList] = useState([])
  /* const handleInputClick = (id) => {
     const inc = incList.filter(list=> list.id !== id)
     setIncList([...inc])
   }
   const handleExpensesClick = (id) => {
    const exp = expList.filter(list=> list.id !== id)
    setExpList([...exp])
  }*/

  
  const manageClick = (obj) => {
    if(obj.type==='inc') {
      setIncList([...incList, <Income  key={obj.id} obj={obj} />])
      
    }
    else if(obj.type==='exp') {
      setExpList([...expList, <Expenses  key={obj.id} obj={obj} />])
     }
  }

  

   
  
  return (
    <div>
      <Header />
      <Inputs  manageClick={manageClick}/>
      <div className="container clearfix">
          <div className="income">
            <h2 className="icome__title">Income</h2>
                    
            <div className="income__list">
              {incList}
            </div>
          </div>
          <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
              {expList}
            </div>
                
          </div>
      </div>
          
    </div>
  );
}

export default App;
