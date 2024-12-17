import React from 'react';
import SalesChart from '../components/Report/Chart/SalesChart.tsx';
import SalesTable from '../components/Report/table/SalesTable.tsx';
import { SalesReportProps } from '../components/utils/sale.ts';
export default function SalesReport(props:SalesReportProps) {
  return (
    <div className='sales-report'>
    <SalesChart productData = {props.productData}/>
    <SalesTable productData = {props.productData}/>
    </div>
  )
}