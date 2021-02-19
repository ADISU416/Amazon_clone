import React from 'react';
import Product from '../Product/Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/Holiday/late/Holi_D_Hero2_GW_US_EN_3000x1200_20201125._CB415756510_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Hamilton Beach Works with Alexa Smart Coffee Maker, Programmable, 12 Cup Capacity, Black and Stainless Steel (49350) – A Certified for Humans Device"
                        price={59.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/415gt3ut70L._AC_SY480_.jpg"
                        />
                    <Product
                    id="70725A"
                    title="Hamilton Beach 12-Cup Stack &/ Snap Food Processor & Vegetable Chopper, Black "
                    price={35.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41HAGPDegUL._AC_SR400,600_.jpg"
                  />
                    <Product 
                        
                    id="29882"
                    title="Hamilton Beach 2 Lb Digital Bread Maker, Programmable, 12 Settings + Gluten Free, Dishwasher Safe Pan + 2 Kneading Paddles, Black"
                    price={48.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/31jonF+xv8L._AC_SR400,600_.jpg"
                  />
                </div>
                <div className="home__row">
                    <Product
                     id="1608341795"
                    title="Amazon Essentials Men's Sherpa Lined Full-Zip Hooded Fleece Sweatshirt"
                    price={29.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FrlG5fgHL._AC_UX679_.jpg"/>
                    <Product
                    id="4953"
                    title="Simple Joys by Carter's Girles' 2-pack Fleece <br/> Full zip hoodies"
                    price={17.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/91cQnfBtLfL._AC_UL320_.jpg" />
                    <Product
                       id="UL320"
                       title="Simple Joys by Carter's Toddler Girls' Full-zip Fleece Jacket"
                       price={18.00}
                       rating={5}
                       image="https://m.media-amazon.com/images/I/91IgtdLeQUL._MCnd_SEARCH281250_AC_UL320_.jpg"/>
                </div>
                <div className="home__row">
                    <Product
                        id="4394"
                    title="LG 65NANO90UNA Alexa Built-In NanoCell 90 Series 65 4K Smart UHD NanoCell TV (2020)"
                    price={1196.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/814E7ozgjsL._AC_SL1500_.jpg" />

                </div>
                <div className="home__row">
                    <Product id="4094"
                    title="DJI Mavic Air 2 - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time ActiveTrack 3.0 Ocusync 2.0,Gray "
                    price={799.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61H6sByGqbL._AC_SL1500_.jpg" />
                    <Product id="38094"
                    title='Canon Ivy CLIQ Instant Camera Printer, Mini Photo Printer with 2"X3" Sticky-Back Photo Paper(10 Sheets), Bumblebee Yellow'
                    price={99.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ltWZp9P%2BL._AC_SL1500_.jpg" />

                </div>
                <div className="home__row">
                    <Product
                        id="C"
                        title="2021 National Park Foundation Wall Calendar: A 12-Month Nature Calendar..."
                        price={10.51}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61C7wXB2rSL._SY498_BO1,204,203,200_.jpg"
                        />
                    <Product
                    id="CD4168965"
                    title="SanDisk 128GB Extreme microSDXC UHS-I Memory Card with Adapter - C10, U3, V30, 4K, A2, Micro SD - SDSQXA1-128G-GN6MA "
                    price={23.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/815cRpgAN3L._AC_SL1500_.jpg"
                  />
                    <Product 
                        
                    id="CB16185832"
                        title="JUDY Emergency Preparedness 
                    Kit Visit the JUDY Store"
                    price={200.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71HXzpy4ILL._AC_SL1500_.jpg"
                  />
                </div>

            </div>
        </div>
    )
}

export default Home

