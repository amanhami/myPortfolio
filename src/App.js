/** @format */
import React from 'react';

// components

import './App.css';
import MyCarousal from './components/my-carousal/my-carousal';
import MyNavbar from './components/Navbar/MyNavbar';
import TitleMessage from './components/title-message/title-message';

const App = () => {
	return (
		<div>
			<MyNavbar />
      <MyCarousal />
      <TitleMessage/>
		</div>
	);
};

export default App;
