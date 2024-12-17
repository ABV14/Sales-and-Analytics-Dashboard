import React from 'react';
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SalesChartProps } from '../../utils/sale.ts';
import { getWeeklySalesGroupedByMonth, getTrendOptions,
  setHighChartsOptions, } from '../../utils/salesTrend.ts';


export default function SalesChart(props:SalesChartProps) {
  const {productData} = props
  const sales = productData.sales;
  const weeklyGroupedData = getWeeklySalesGroupedByMonth(sales);
  setHighChartsOptions();

  return (
    <>
      <div className="sales-column-trend">
        <HighchartsReact
          highcharts={Highcharts}
          options={getTrendOptions(weeklyGroupedData)}
        />
      </div>
    </>
  );
}

