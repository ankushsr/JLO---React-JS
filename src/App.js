import React, { useState, useEffect } from 'react';
import './App.css';
import desktopImage from '../src/images/Home.jpg';
import mobileImage from '../src/images/Home.jpg';
// import Header from './compoents/Header/Header';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "Home.jpg" },
    { url: "Home.jpg" },
     
  ];

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    
    return (
        
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
           {/* <Header/> */}
            <div className="App-content">
                <h1>Jodhpurlocal</h1>
                <p>They are good ho</p>
                        </div>       
<div>
<SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
 
</div>
        
        </div>

    
 
        
    );
};

export default App;
 