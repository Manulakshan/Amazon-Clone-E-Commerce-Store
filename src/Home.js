import React from 'react'
import "./Home.css";
import Product from "./Product";

function 
Home() {
  return (
    <div className="home">
        <div className ="home__container">
          <img className="home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
          <div className="home__row">
          <Product 
          id = "12321341"
          title= "The lean startup : how constant nnovaton creates radcally successful busnesses paperbac"
          price = {29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}/>
           <Product 
          id = "49538094"
          title= "Kenwood Mix Stand for Baking, Stylish Kitchen Mixer with K-Beater , Dough hook Whisk, 5 Litre Glass Bowl"
          price={239.0}
          image="https://m.media-amazon.com/images/I/81WNjVADMjL._AC_UY218_.jpg"
          rating={4}/> 
          </div>
          <div className="home__row">
         
          <Product 
          id = "5647867"
          title= "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/91BsCfUIMML._AC_UY218_.jpg"
          /> 
          <Product 
          id = "2344593"
          title= "Amazon Echo (3rd genaration) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51s9ZUsjgCL._AC_UY218_.jpg"
          />
          <Product
          id = "3254354"
          title= "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_5X450_.jpg"
          />   
        
          </div>
          <div className="home__row">
          <Product 
           id = "5695543"
           title= "Samsung Smart LED TV "
           price={1099.99}
           rating={5}
           image="https://m.media-amazon.com/images/I/61Ji0toBJ-L.__AC_SX300_SY300_QL70_FMwebp_.jpg"/>
          </div>

        </div>
    </div>
  )
}

export default Home
