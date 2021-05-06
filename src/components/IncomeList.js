import React, {useContext} from 'react'

import Income from './Income'
import {Context} from '../useContext/Context'



function IncomeList() {

    const {incInputs} = useContext(Context)
    const incomeList = incInputs.map(input=> {
        return <Income key={input.id} obj={input} />
    })
    return (
        
          <div className="income">
            <h2 className="icome__title">Income</h2>
                    
            <div className="income__list">
               {incomeList}
            </div>
          </div>
        
    )
}


export default IncomeList