import React from 'react'
import './productcard.css'
const ProductCard = ({title,discountPercentage,thumbnail,price,deleteProduct,_id,rating}) => {
  return (
    <>
        <div class=" items-center justify-center flex mt-5 w-full">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="image-container">
                                <div class="first">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">{discountPercentage}%</span>
                                        <span title='delete product' class="wishlist cursor-pointer"><i class="fa fa-heart-o" onClick={()=>deleteProduct(_id)}></i></span>
                                    </div>
                                </div>

                                <img
                                    src={thumbnail}
                                    class="img-fluid rounded thumbnail-image"
                                    alt='product'
                                />
                            </div>

                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="dress-name">{title}</h5>

                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">&#8377 {price}</span>
                                        <small class="old-price text-right">&#8377 700</small>
                                    </div>
                                </div>



                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i class="fa fa-star-o rating-star"></i>
                                        <span class="rating-number">{rating}</span>
                                    </div>

                                    <span class="buy">BUY +</span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
    </>
  )
}

export default ProductCard