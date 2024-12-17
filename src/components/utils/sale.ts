export interface Sale {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }
  
  export  interface SalesTableProps {
    productData: {
      sales: Sale[];
    };
  }
  export  interface SalesTableProps {
    productData: {
      sales: Sale[];
    };
  }
  export  interface SalesReportProps {
    productData: {
      sales: Sale[];
    };
  }
  export  interface SalesChartProps {
    productData: {
      sales: Sale[];
    };
  }