import React from 'react';

import SalesReport from './SalesReport.tsx';
import ProductSummary from '../components/Product/ProductSummary.tsx';
export default function Product(props) {
   const {product} = props

    return (
        <>
        {product && product?.length !== 0 ?
        <>
        <div className='product-information'>
        <ProductSummary productData = {product}/>
        <SalesReport productData = {product}/>
    </div>
    </>
    :
        <h1 className='no-data-found'>Error finding Data, Please wait, and try again later</h1>
    }
    </>
    )
}