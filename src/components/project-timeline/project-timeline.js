/** @format */

import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// projects
import L_ReactToDoList from '../../assets/img/projects/React_ToDo_List.webp';
import L_proShop from '../../assets/img/projects/proShop.png';
import L_RoboFriends from '../../assets/img/projects/Robofriends.webp';

// skills
import L_REACT from '../../assets/img/skills/react.svg';
import L_NODE_JS from '../../assets/img/skills/nodejs.svg';
import L_EXPRESS from '../../assets/img/skills/express.svg';
import L_JWT from '../../assets/img/skills/jwt.svg';
import L_MONGODB from '../../assets/img/skills/mongodb.svg';
import Image from 'react-bootstrap/Image';
import L_REDUX from '../../assets/img/skills/redux.svg';
import L_REACT_ROUTER from '../../assets/img/skills/react-router.svg';
import L_HTML5 from '../../assets/img/skills/html-5.svg';
import L_CSS3 from '../../assets/img/skills/css3.svg';
import L_BOOTSTRAP4 from '../../assets/img/skills/bootstrap-4.svg';
import L_REACT_BOOTSTRAP from '../../assets/img/skills/react-bootstrap.svg';
import L_MATERIALUI from '../../assets/img/skills/material-ui-1.svg';
import './project-timeline.css';
const ProjectTimeline = () => {
	return (
		<div id='projects'>
			<h1 className='pt-3 text-center font-details-b pb-3'>PROJECTS</h1>
			<Timeline>
				<Events>
					{/* Project: Todo List With MUI */}
					<ImageEvent
						date='01/10/2020'
						className='text-center'
						text='React ToDo App'
						src={L_ReactToDoList}
						alt='React ToDo App'>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> This is a Todo App created
												with React and Material UI that keeps a track of your
												Todos
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Keeps track of your Todos</li>
													<li>Powered by React and Material UI</li>
													<li>Respoisive Design</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'></Image>{' '}
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'></Image>{' '}
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'></Image>{' '}
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MATERIALUI}
																alt='Material-UI'
																rounded
																className='image-style1 m-1'></Image>{' '}
															Material-UI
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://akjha96.github.io/Todo-List-React/'
									target='_blank'>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/akjha96/Todo-List-React'
									target='_blank'>
									SOURCE CODE
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: MERN Shopping-list */}
					<ImageEvent
						date='16/09/2020'
						className='text-center'
						text='ProShop eCommerce Platform'
						src={L_proShop}
						alt='MERN Shopping-list'>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> eCommerce platform built
												with the MERN stack & Redux.
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Full featured shopping cart</li>
													<li>Product reviews and ratings</li>
													<li>Top products carousel</li>
													<li>Product pagination</li>
													<li>Product search feature</li>
													<li>User profile with orders</li>
													<li>Admin product managemen</li>
													<li>Admin user management</li>
													<li>Admin Order details page</li>
													<li>Mark orders as delivered option</li>
													<li>
														Checkout process (shipping, payment method, etc)
													</li>
													<li>PayPal / credit card integration</li>
													<li>Database seeder (products & users)</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'></Image>{' '}
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REDUX}
																alt='Redux'
																rounded
																className='image-style1 m-1'></Image>{' '}
															Redux
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT_ROUTER}
																alt='Redux'
																rounded
																className='image-style1 m-1'></Image>{' '}
															React Router
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_NODE_JS}
																alt='Node.js'
																rounded
																className='image-style1 m-1'></Image>{' '}
															Node.js
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_EXPRESS}
																alt='Express'
																rounded
																className='image-style1 m-1'></Image>{' '}
															Express
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_JWT}
																alt='JSON Web Token'
																rounded
																className='image-style1 m-1'></Image>{' '}
															JSON Web Token
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MONGODB}
																alt='MongoDB'
																rounded
																className='image-style1 m-1'></Image>{' '}
															MongoDB
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT_BOOTSTRAP}
																alt='React Bootstrap'
																rounded
																className='image-style1 m-1'></Image>{' '}
															React Bootstrap
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://github.com/amanhami/mern-shopping-list'
									target='_blank'>
									SOURCE CODE
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Smart Brain */}

					{/* Project: RoboFriends */}

					<ImageEvent
						date='14/01/2020'
						className='text-center'
						text='RoboFriends'
						src={L_RoboFriends}
						alt='Robo Friends'>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> An app that allows to
												search through robots fetched in real-time with users.
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Search through Robots</li>
													<li>Users and Robots being fetched via API call</li>
													<li>Usage of Redux store</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'></Image>{' '}
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'></Image>{' '}
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_BOOTSTRAP4}
																alt='Bootstrap 4'
																rounded
																className='image-style m-1'></Image>{' '}
															Bootstrap 4
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'></Image>{' '}
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REDUX}
																alt='Redux'
																rounded
																className='image-style m-1'></Image>{' '}
															Redux
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								{/* <UrlButton
									href='https://akjha96.github.io/RoboFriends/'
									target='_blank'>
									SEE LIVE
								</UrlButton> */}
								<UrlButton
									href='https://github.com/amanhami/robofriends'
									target='_blank'>
									SOURCE CODE
								</UrlButton>
							</div>
						</div>
					</ImageEvent>
				</Events>
			</Timeline>
		</div>
	);
};

export default ProjectTimeline;
