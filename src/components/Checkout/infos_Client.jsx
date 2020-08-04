import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap'

import { ClientProfileContext } from '../../lib/ClientProfileContext'
import Section from '../../HOC/Section';


const InfosClient = () => {
   const [isValid, setValid] = useState(false)

   const client = useContext(ClientProfileContext);
   const {
      nomClient,
      prenomClient,
      emailClient,
      adresseClient,
      cpClient,
      villeClient,
     setClientProfileContext
   } = client

   const validate = () => {
      let errors = []
      const inputs = document.querySelectorAll(".form-control-input")
      // console.log('inputs', inputs)
      inputs.forEach(input => {
         !input.value ? errors.push(input) : errors.length && errors.pop()
      })
      // console.log(errors)
      setValid(!errors.length)
      console.log('errors.length', errors.length)
   }

   useEffect(() => {
      validate()
   })

   return (
      <Fragment>
         <Section>
            <Container id="infosClient">

               <Row className="infosClient-header">
                  <Col>
                     <div className='intro text-center'>
                        <h1 className='title'> Vos informations </h1>
                     </div>
                  </Col>
               </Row>

               <Row>
                  <Col md={6} className="mx-auto p-3">
                  <Form>
                     <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                           <Form.Control placeholder="Nom" className="form-control-input"
                              name="nomClient"
                              defaultValue={nomClient}
                              onChange={e => {
                                 setClientProfileContext ({ [e.target.name]: e.target.value} )
                              }} 
                           />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridFirstName">
                           <Form.Control placeholder="Prénom" className="form-control-input"
                              name="prenomClient"
                              defaultValue={prenomClient}
                              onChange={e => {
                                 setClientProfileContext({ [e.target.name]: e.target.value } )
                              }} 
                           />
                        </Form.Group>
                     </Form.Row>

                     <Form.Row>
                           <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Control placeholder="Email" className="form-control-input"
                                 name="emailClient"
                                 defaultValue={emailClient}
                                 onChange={e => {
                                    setClientProfileContext({ [e.target.name]: e.target.value} )
                                 }} 
                              />
                           </Form.Group>
                     </Form.Row>
                     <br />
                     <Form.Group controlId="formGridAddress1">
                        <Form.Control placeholder="Adresse de livraison" className="form-control-input"
                           name="adresseClient"
                           defaultValue={adresseClient}
                           onChange={e => {
                              setClientProfileContext({ [e.target.name]: e.target.value })
                           }}
                        />

                     </Form.Group>

                     <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                           <Form.Control placeholder="Code Postal" className="form-control-input"
                              name="cpClient"
                              defaultValue={cpClient}
                              onChange={e => {
                                 setClientProfileContext({ [e.target.name]: e.target.value })
                              }}
                           />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                           <Form.Control placeholder="Ville" className="form-control-input"
                              name="villeClient"
                              defaultValue={villeClient}
                              onChange={e => {
                                 setClientProfileContext({ [e.target.name]: e.target.value })
                              }}
                           />
                        </Form.Group>
                     </Form.Row>

                     <Link to="/payment" className={`${ !isValid && 'disabled' } btn btn-outline-success float-right`}
                        
                     >
                        Confirmer
                     </Link>
                  </Form>
                  </Col>
               </Row>

            </Container>
         </Section>
      </Fragment>
   )
}
export default InfosClient