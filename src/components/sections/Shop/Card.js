import React from 'react';
import { Link } from 'react-router-dom'
// import formatCurrency from '../../../utils/utils';
import Fade from '@material-ui/core/Fade';
import Alert from '@material-ui/lab/Alert';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';



const Card = props => {
   const product = props.product
   const display = props.display


      return (
         <Fade in={true}>
         <div className="row justify-content-center product-item">

            <div className={`product-images align-items-center ${display === 'list-display' ? 'col-md-6 text-center' : ''}`}>
               <Link to={`/product/${product._id}`} >
                  <img src={product.imgCollection[0]} alt={product.titleProduct} className={`align-self-center img-fluid`} />
               </Link>
               {/* {product.quantityProduct < 1 && <div className="rupture bg-danger">Rupture</div>}
               {product.promotionProduct && <div className="promotion bg-success">-20 %</div>} */}
                  {product.promotionProduct && 
                  <LoyaltyOutlinedIcon className="promotion" style={{fontSize:"2em"}} />}
            </div>


            <div className={`product-details ${display === 'list-display' && 'col-md-6'}`}>
               <h2>{product.titleProduct}</h2>

               {display === 'list-display' && (
                  <p>{product.descriptionProduct}</p>
               )}
               {/* <b>{product.categoryProduct}</b>*/}
               <p>Mots-clé, sdb, rangement</p> 
            
                  <h5>{product.priceProduct} €</h5>
                  {product.quantityProduct < 1 && <Alert severity="error" className="rupture">Rupture</Alert>}
         
            
               {/* <b>{product.sizeProduct} - {product.weightProduct}</b> */}
            
            
               
               {/* <button className="btn">Détails <IoIosArrowForward /> </button> */}
         
               
            
            </div>

         </div>
         </Fade>
   
      );
   
}
export default Card