export interface DataGrafica{
    stockFullName: string,
    stockShortName: string,
    price : Price,
    chartData: Chardata, 
}


export interface Price {
    current: number,
    open: number,
    low: number,
    high: number,
    cap: number,
    ratio: number,
    dividend: number,
}

export interface Chardata{
    labels: string[],
    data: number[]
}