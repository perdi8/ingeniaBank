import React from 'react'
import { AnalyticBalanceCommonContainer } from '../common-components/analytic-balance/BalanceCommon.container'
import { AnalyticCommonContainer } from '../common-components/analytic-expenses/AnalyticCommon.container'
import { DoughtnutCommonContainer } from '../common-components/grafic-doughtnut/DoughtnutCommon.container'

export const BalancePage = () => {
    return (
        <div>
           <AnalyticBalanceCommonContainer />
            <AnalyticCommonContainer />
            <DoughtnutCommonContainer />
        </div>
    )
}
