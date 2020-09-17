import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Parallax from 'react-rellax'
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowForward
      className={'slick-arrow slick-n'}
      style={{
        ...style,
        display: "block",
        fontSize: "2.5em",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowBack
      className={'slick-arrow slick-p'}
      style={{
        ...style,
        display: "block",
        fontSize: "2.5em",
      }}
      onClick={onClick}
    />
  );
}




const HomePromotion = () => {
  const [productsDb, setProductsDb] = useState([])

  useEffect(() => {
      // IndexDB getAll
      setTimeout(() => {    // setTimeout sinon ce rend avant App/IndexDbInit()
        var request = indexedDB.open('customers', 2);
        request.onsuccess = function (event) {
          const db = event.target.result
          db.transaction('product').objectStore('product')
            .getAll().onsuccess = function (event) {
              setProductsDb(event.target.result);
            }
        }
      }, 300);
    }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
      
    ]
  };

  return (
    <div className="row no-gutters align-items-center">
      <div className="col-lg-12">
        
        <div className="title-promotion">
          <h2>
          P R O M O T I O N
          </h2>
        </div>


        <Parallax speed={1} data-scroll>
        <div className="container promotion-parallax">
        <div>
          <Slider {...settings}>
            {productsDb.map((item, index) => ( item.promotionProduct === true &&
              <div key={index}>
                <div className="promotion-content m-2">
                <Link to={`/product/${item._id}`}>
                  <img src={item.imgCollection[0]} alt={item._id} className="img-fluid"/>
                </Link>
                </div>
                <div className={`item-details text-center`}>
                  <h2>{item.titleProduct}</h2>
                  <h5>{item.priceProduct}€ - <span>58€</span></h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
        </Parallax>

      </div>
      </div>

  );
};
export default HomePromotion