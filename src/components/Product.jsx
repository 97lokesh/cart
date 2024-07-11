import React, { useState } from 'react'

function Product(props) {
    let [toggle, setToggle] = useState(true)
    return <>
        <div className="col mb-5">
            <div className="card h-100">
                {(props.data.sale)?<div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>:<></>}
                <img className="card-img-top" src={`${props.data.image}`} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder"><strong>{props.data.product_name}</strong></h5>
                        {(props.data.ratings == 5) ?<div className="d-flex
                            justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>:<></>}
                        <span className="text-muted text-decoration-line-through">{props.data.old_price}</span>
                        {props.data.new_price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        {
                            toggle ? <button className='btn btn-outline-dark mt-auto'
                                onClick={() => {
                                    setToggle(current => !current)
                                    props.setCart(current => current + 1)
                                }}
                                >Add to Cart</button>
                                :
                                <button className='btn btn-outline-dark mt-auto'
                                    onClick={() => {
                                        setToggle(current => !current)
                                        props.setCart(current => current - 1)
                                    }}
                                >Remove
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>



    </>


}

export default Product
