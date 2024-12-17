export interface Product {
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: WeeklySales[];
}

export interface WeeklySales {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}
export interface ProductState {
    products: any[]; 
    view_index: number;
    error: string | undefined,
    loading: boolean,
  }
  