import React, { useState } from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Product from './components/Product'
import Footer from './components/Footer'

function App() {
  let data = [
    {   
        sale: false,
        image: 'https://dummyimage.com/450x300/c9c0cf/dfe0ed.png',
        product_name: "Fancy Product",
        old_price: null,
        new_price: "$40.00 - $80.00",
        ratings: "0"
    },
    {   
        sale: true,
        image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
        product_name: "Special Item",
        old_price: "$20.00 ",
        new_price: "$18.00",
        ratings: "5"
    },
    {
      sale: false,
      image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
      product_name: "Sale Item",
      old_price: "$50.00",
      new_price: " $25.00",
      ratings: "0"
    },
    {
      sale: true,
      image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
      product_name: "Iphone 14",
      old_price: null,
      new_price: "$40.000",
      ratings: "5"
    },
    {
      sale: true,
      image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
      product_name: "Poco F6",
      old_price: "$50.000",
      new_price: " $25.00",
      ratings: "0"
    },
    {
      sale: false,
      image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
      product_name: "Fancy Product",
      old_price: null,
      new_price: "$120.00 - $280.00",
      ratings: "0"
    },
    {
      sale: true,
      image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
      product_name:"Special Item",
      old_price: "$20.00",
      new_price: " $18.00",
      ratings: "5"
    },
    {
      sale: false,
      image: "https://dummyimage.com/450x300/c9c0cf/dfe0ed.png",
      product_name: "Popular Item",
      old_price: null,
      new_price: "$40.00",
      ratings: "5"
    }
  ]
  let [cart, setCart] = useState(0)

  return <>
    <TopBar cart={cart} />
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
            data.map((e,i) => {
              return <Product data = {e} setCart={setCart} key={i}/>
            })
          }
        </div>
      </div>
    </section>
    <Footer/>
  </>
}

export default App
