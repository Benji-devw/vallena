import React, { Fragment, useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { ClientProfileContext } from '../../lib/ClientProfileContext';


import Stripe from './stripe'


import Section from '../../HOC/Section';


const Payment = () => {
   const client = useContext(ClientProfileContext)
   const items = useSelector(state => state.items)

   const [subTotal, setSubTotal] = useState(0.00)
   const [total, setTotal] = useState(0.00)
   const shipping = 5.50
   useEffect(() => {
      let totals = items.map(item => {
         return item.quantity * item.details.priceProduct
      })
      setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
      setTotal(subTotal + shipping)
   }, [items, subTotal, total]);
   const totalCmd = { total: total, shipping: shipping }
   // console.log('totalCmd', totalCmd)
   
   
   return (
      <Fragment>
         <Section>
            <Container id="payment">
               
               <Row className="payment-header">
                  <Col>
                     <div className='intro text-center'>
                        <h1 className='title'> Paiement </h1>
                     </div>
                  </Col>
               </Row>

               <Row>
                  <Col sm={8}>

                     {/* <InfosClient /> */}
                     <Stripe total={totalCmd} client={client} items={items}/>

                     4242424242424242
                     ben.nav@pm.me

                     {/* <Link to="/confirm" className={`btn btn-outline-success float-right`}
                        onClick={() => {
                           // reset()
                           postOrder()
                        }}
                     > Payer
                     </Link> */}
                  </Col>
                  <Col sm={3}>
                  
                     <h4>Commande :</h4>
                        <hr />
                     <p className="text-left">Subtotal</p>
                     <p className="text-right">€<b>{subTotal.toFixed(2)}</b></p>
               
                     <p className="text-left">shipping</p>
                     <p className="text-right">€<b>{shipping.toFixed(2)}</b></p>
                        <hr />
                     <h3 className="text-left">Total</h3>
                     <h4 className="text-right">€<b>{subTotal === 0.00 ? "0.00 " : total.toFixed(2)}</b></h4>

                        <hr />

                     <h4>Destination : </h4>
                     <p>{client.nomClient} {client.prenomClient}</p>
                     <p>{client.adresseClient}</p>
                     <p>{client.cpClient} - {client.villeClient}</p>
                  
                  </Col>
               </Row>

            </Container>
         </Section>
      </Fragment>
   )
}
export default Payment