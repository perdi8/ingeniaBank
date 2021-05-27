import React from 'react'
import { AnalyticBalanceContainer } from '../pods/analytic-balance/BalanceHome.container'
import { AnalyticContainer } from '../pods/analytic-expenses/AnalyticHome.container'
import { DoughtnutContainer } from '../pods/grafic-doughtnut/doughtnut.container'

export default function BalancePage() {
    return (
        <div>
            <AnalyticBalanceContainer />
            <AnalyticContainer />
            <DoughtnutContainer />
        </div>

    )
}
