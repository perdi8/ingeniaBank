import React from 'react'
import { CardCommonContainer } from '../common-components/card/CardCommon.container'
import '../styles/Dashboard.style.css'

export const CardsPage : React.FC = () => {

    return (
        <div>
            <div className = "title-box box-margin-b">Tarjetas</div>  
            <CardCommonContainer />
        </div>
    )
}
