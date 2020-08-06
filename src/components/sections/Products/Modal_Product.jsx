import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addtoCart } from '../../../lib/actions'

import Modal from 'react-bootstrap/Modal'
import { Row, Col, Button } from 'react-bootstrap'
import moment from 'moment'

import { MdAddShoppingCart } from 'react-icons/md';


const ModalProduct = ({ item }) => {
	const itemsCart = useSelector(state => state.items)
	// console.log('item', item._id)
	// console.log('itemsCart', itemsCart)

	// Show Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// Redux
	const [qty, setQty] = useState(1)
	const dispatch = useDispatch()				// Dispatch l'item du store localement pr le lire
	const add = (item, quantity) => {
		dispatch(addtoCart(item, quantity))
	}

	// Filtre add() si déja dans le panier
	const searchIdProduct = itemsCart.map(e => e.details._id)
	const foundId = searchIdProduct.includes(item._id)



	return (
		<>
			<Button variant="outline-primary" size="sm" onClick={handleShow}>
					More info
			</Button>

			<Modal show={show} onHide={handleClose} size="lg" animation={true} aria-labelledby="contained-modal-title-vcenter" centered>
				
				{/* <Modal.Header>
					<Modal.Title><h2>{item.titleProduct}</h2></Modal.Title>
					<p className='section-title'>Categorie : <span> {item.categoryProduct}</span> </p>
				</Modal.Header> */}
				
				<Modal.Body className="pt-3">
					<br />
					<Row className="text-center mb-5">
						<Col>
							<p>{item.descriptionProduct}</p>
						</Col>
					</Row>
					<Row>
						<Col lg={8}>
							{/* <h5 className='section-title'>Screen :</h5> */}
							<img src={item.img} alt="none" className="img-fluid" />
						</Col>
						<Col lg={4}>
							<h3>{item.titleProduct}</h3>
							<h5>€ {item.priceProduct}</h5>
							<p>{item.quantityProduct} en stock</p>


							{item.quantityProduct > 1 ? 	// Affichage à la volée avec opérateur ternaire
							<>
								{!foundId ? 
									<div className="addToCart">
										<button type="button" className="btn btn-sm btn-secondary"
											onClick={() => setQty(qty > 1 ? qty -1 : 1)}		// tant que qty est supp a 1 ? qty -1 sinon return 1
										>-</button>
										<span className="btn btn-light qty">{qty}</span>
										<button type="button" className="btn btn-sm btn-secondary"
											onClick={() => setQty(item.quantityProduct > qty ? qty + 1 : qty)}
										>+</button>
										<MdAddShoppingCart size="2em" className="ml-3" style={{cursor: "pointer"}}
											onClick={() => add(item, qty)} />
									</div>
								: <p>Est déjà dans votre panier !</p> }
							</> : <p>Rupture !</p>}

						</Col>
					</Row>
					<br />
				</Modal.Body>

					<Row lg="12" className="m-3">
						<Col xs="10">
							<p className='section-title text-left'>Posted : 
								By : <span>{item.reporterProduct}</span>
								<br />
								<span>{moment(item.createdAt).startOf().fromNow()}</span> 
							</p>
						</Col>
						<Col xs="2">
							<Button variant="outline-dark mx-right" size="sm" onClick={handleClose}> Close </Button>
						</Col>
					</Row>
			
			</Modal>
		</>
	);
}
export default ModalProduct