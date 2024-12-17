import React from "react"
import ReviewStar from '../ReviewStar/ReviewStar.tsx';
import ReviewModal from '../ReviewModal/ReviewModal.tsx';


export default function ProductSummary(props) {
    const { productData } = props
    return (
        <div className={" product-overview-container"}>
            <div className="product-identification">
                <img className="product-image" src={productData.image} alt={productData.title} />
                <p className="product-title">{productData.title}</p>
                <p className="product-subtitle">{productData.subtitle}</p>
            </div>
            <div className="product-tags">
                {productData.tags && productData.tags.map((item, index) =>
                    <span className="product-tag" key={index}>{item}</span>
                )}
            </div>
            <>
                <p className='details-title'>{"Details"}</p>
                <ol className='product-details' >
                    {productData.details && productData.details.map((item, index) =>
                        <li className='product-detail' key={'product-detail' + { index }}>
                            {item}
                        </li>
                    )}
                </ol>
            </>
            <p className='reviews-title'>{"Reviews"}</p>
            <ol className='product-reviews'>
                {productData.reviews && productData.reviews.map((item, index) =>
                    <li className='product-review' key={'product-review' + { index }}>
                        <div className="review-container">
                            <div className="review-header">
                                <div className="customer-name">{item.customer}</div>
                                <ReviewStar score={item.score} />

                            </div>
                            <p className="review-text" id="reviewText">
                                {`${item.review.substring(0, 100)}... `}
                                <p><ReviewModal customer={item.customer} review={item.review} /></p>
                            </p>

                        </div>


                    </li>
                )}
            </ol>
        </div>
    )
}