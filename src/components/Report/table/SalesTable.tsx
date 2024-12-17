import React, { useState, useMemo } from "react";
import ascending from '../../../assets/ascending.svg';
import descending from '../../../assets/descending.svg';
import {Sale} from '../../utils/sale.ts';
import {SalesTableProps} from '../../utils/sale.ts'


const ITEMS_PER_PAGE = 10;

export default function SalesTable(props: SalesTableProps) {
  const { productData } = props;

  const [sortConfig, setSortConfig] = useState<{ key: keyof Sale; direction: "asc" | "desc" } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedSales = useMemo(() => {
    if (!sortConfig) return productData.sales;

    const sorted = [...productData.sales].sort((a, b) => {
      const key = sortConfig.key;
      if (a[key] < b[key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [productData.sales, sortConfig]);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSales = sortedSales?.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(sortedSales?.length / ITEMS_PER_PAGE);


  const formatData = (dateProvided) =>{
    const [year, month, day] = dateProvided.split("-");

  return `${month}-${day}-${year}`;
  }


  const handleSort = (key: keyof Sale) => {
    const direction = sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };
  

  const getSortIndicator = (key: keyof Sale) => {
    if (!sortConfig || sortConfig.key !== key) return <img alt='descending-arrow' id="descending" src={descending}/>;
    return sortConfig.direction === "asc" ?  <img alt='ascending-arrow' id="ascending" src={ascending}/> : <img alt='descending-arrow' id="descending" src={descending}/> ;
  };


  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="sales-table">
      <table >
        <thead>
          <tr>
            <th onClick={() => handleSort("weekEnding")}>WEEK ENDING {getSortIndicator("weekEnding")}</th>
            <th onClick={() => handleSort("retailSales")}>RETAIL SALES {getSortIndicator("retailSales")}</th>
            <th onClick={() => handleSort("wholesaleSales")}>WHOLESALE SALES{getSortIndicator("wholesaleSales")}</th>
            <th onClick={() => handleSort("unitsSold")}>UNITS SOLD{getSortIndicator("unitsSold")}</th>
            <th onClick={() => handleSort("retailerMargin")}>RETAILER MARGIN {getSortIndicator("retailerMargin")}</th>
          </tr>
        </thead>
        <tbody>
          {paginatedSales?.map((sale) => (
            <tr key={sale.weekEnding}>
              <td>{formatData(sale.weekEnding)}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold}</td>
              <td>${sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="pagination-button pagination-first"
          onClick={() => handlePageChange(1)} 
          disabled={currentPage === 1}
        >
          <b> {`<<`}</b>
         
        </button>
        <button className="pagination-button pagination-previous"
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
            {`<`}
        </button>
        <span style={{ margin: "0 10px" }}>Page {currentPage} of {totalPages}</span>
        <button className="pagination-button pagination-next"
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          {`>`}
        </button>
        <button className="pagination-button pagination-last"
          onClick={() => handlePageChange(totalPages)} 
          disabled={currentPage === totalPages}
        >
          {`>>`}
        </button>
      </div>
    </div>
  );
}
