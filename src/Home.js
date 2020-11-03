import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123456"
            title="Dash Mini Maker: 
              The Mini Waffle Maker Machine for Individual Waffles, 
              Paninis, Hash browns, & other on the go Breakfast, 
              Lunch, or Snacks - Red"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71wvIZCRZ1L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="473584"
            title="Ryobi P118 Lithium Ion Dual Chemistry Battery 
            Charger for One+ 18 Volt Batteries 
            (Battery Not Included / Charger Only) (Renewed)"
            price={36.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81GuDJtPm3L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="769457"
            title="Apple Watch Series 5 (GPS + Cellular, 44MM)-
              Space Gray Aluminum Case with Black Sport Band (Renewed)"
            price={429.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71rejwthFaL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="192438"
            title="DualShock 4 Wireless Controller for PlayStation 4-
              Magma Red"
            price={64.98}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="343251"
            title="KitchenAid Factory Professional 600 6-Qt. 
            Bowl-Lift Stand Mixer - Cocoa Silver (Renewed)"
            price={299.78}
            image="https://images-na.ssl-images-amazon.com/images/I/71dW-59GmDL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="901294"
            title="Sceptre 24 inch Curved 75Hz Gaming LED Monitor 
              Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready 
              Metal Black 2019 (C248W-1920RN)"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
