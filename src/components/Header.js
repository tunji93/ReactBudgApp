import React from 'react'


function Header(props) {
    const month = new Date().toLocaleString("default", { month: "long" })
    const year =  new Date().getFullYear()
    
    return (
        
        <header>
            <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{`${month} ${year}`}</span>:

                </div>
                
                <div className="budget__value">10,000</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ 5000</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                        
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- 7500</div>
                        <div className="budget__expenses--percentage">45%</div>
                    </div>
                </div>
            </div>
          </div>
        </header>
    )
}

export default Header