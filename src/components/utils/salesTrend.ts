import * as Highcharts from "highcharts";
import { WeeklySales } from "./product";

export function getWeeklySalesGroupedByMonth(sales: any[]) {
    const retailSales: number[] = [];
    const wholesaleSales: number[] = [];
    const categories: string[] = [];  
    const months: string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    
    const labeledMonths = new Set();  

    sales?.forEach((salesWeek: WeeklySales) => {
      const month: string = salesWeek["weekEnding"].split("-")[1];
      const monthName = months[parseInt(month) - 1]; 
      if (!labeledMonths.has(monthName)) {
        categories.push(monthName);  
        labeledMonths.add(monthName);  
      } else {
        categories.push("");  
      }
      
      retailSales.push(salesWeek["retailSales"]);
      wholesaleSales.push(salesWeek["wholesaleSales"]);
    });
    
    return { 
      retail: retailSales, 
      wholesale: wholesaleSales, 
      categories: categories 
    };
  }
  
  export function getTrendOptions(data: any): Highcharts.Options {
    return {
      chart: {
        type: "spline",
        height:600,
        style: {
          fontFamily: "Trebuchet MS, sans-serif",
        },
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "Retail Sales",
        align: "left",
        style: {
          fontWeight: "lighter",
        },
      },
      legend: {
        enabled: true,
      },
      series: [
        {
          name: "Wholesale Sales",
          type: "spline",
          data: data.wholesale, 
          color: "#47a9f6",
        },
        {
          name: "Retail Sales",
          type: "spline",
          data: data.retail,  
          color: "#9aa5be",
        },
      ],
      xAxis: {
        type:"category",
        categories: data.categories, 
        labels: {
          style: {
            opacity: 0.8,  
          },
        },
        lineColor: "#d3d3d3",  
      },
      yAxis: {
        title: {
          text: "",
        },
        tickPositions: [-1000000, -500000, -250000,-100000, 0, 100000, 250000, 500000, 1000000, 1500000],
        labels: {
          enabled: false,  
        },
        gridLineColor: "#ffffff",  
      },
      tooltip: {
        valuePrefix: "$",
        shared: true,
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false,  
          },
        },
      },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 400,
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
    };
  }
  
  export function setHighChartsOptions() {
    Highcharts.setOptions({
      lang: {
        thousandsSep: ",",
      },
    });
  }