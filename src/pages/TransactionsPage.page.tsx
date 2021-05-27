import React from 'react'
import { TransactionCommonContainer } from '../common-components/transaction/TransactionCommon.container'
import '../styles/Dashboard.style.css'

export const TransactionsPage : React.FC  = () => {
    return (
        <div>
            <div className = "title-box">Movimientos</div>  
            <TransactionCommonContainer/>
        </div>
    )
}
