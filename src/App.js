/** @format */
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Slide from 'react-reveal/Slide';

// components

import './App.css';
import MyCarousal from './components/my-carousal/my-carousal';
import MyNavbar from './components/Navbar/MyNavbar';
import TitleMessage from './components/title-message/title-message';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Experience from './pages/experience/experience';
import ProjectTimeline from './components/project-timeline/project-timeline';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
	return (
		<div className='App' style={{ position: 'relative' }}>
			<MyNavbar />
			<MyCarousal />
			<TitleMessage />
			<div>
				<Parallax
					blur={{ min: -30, max: 30 }}
					bgImage={require('./assets/img/parallex/background.webp')}
					bgImageAlt=''
					strength={-200}>
					<div>
						<Container className='container-box rounded'>
							<Fade duration={500}>
								<About />
							</Fade>
						</Container>
					</div>
				</Parallax>
			</div>
			<div>
				<Container className='container-box rounded'>
					<Slide bottom duration={500}>
						<hr />
						<Skills />
					</Slide>
				</Container>
			</div>
			<div>
				<Container className='container-box rounded'>
					<Fade bottom duration={500}>
						<hr />
						<Experience />
					</Fade>
				</Container>
			</div>
			<div>
				<Container className='container-box rounded'>
					<Slide bottom duration={500}>
						<hr />
						<ProjectTimeline/>
					</Slide>
				</Container>
			</div>
			<div>
				<Container className='container-box rounded'>
					<Slide bottom duration={500}>
						<hr />
						<Contact/>
					</Slide>
				</Container>
			</div>
			<hr />
			<Footer/>
		</div>
	);
};

export default App;
