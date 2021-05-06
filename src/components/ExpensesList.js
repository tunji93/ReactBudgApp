import React, {useContext} from 'react'

import Expenses from './Expenses'

import {Context} from '../useContext/Context'

function ExpensesList() {
    
    const {expInputs} = useContext(Context)

    const expensesList = expInputs.map(input=> {
        return <Expenses key={input.id} obj = {input}/>
    })

    return (
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            
            <div className="expenses__list">
                {expensesList}
            </div>
                
        </div>
    )
}

export default ExpensesList