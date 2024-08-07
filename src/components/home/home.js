import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./home.css";

export default function Home() {
//   const [showBasic, setShowBasic] = useState(false);
//   const headerStyle = {
//     // backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh', // Full viewport height
//   };https://i.pinimg.com/564x/cf/f9/93/cff99339fcb98208f632e6cfed9fe3f0.jpg
  return (
    <>
    <header >
      <div
        id='intro-example'
        className='p-5 text-center bg-image landing-img'
        style={{
            backgroundImage: "url('./images/background.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Make the background image cover the entire container
            backgroundPosition: "center center", // Center the background image
            height: '100vh'
          }}
      >
        <div className='mask h-50 m-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100' style={{marginTop:'120px'}}>
            <div className='text-white'>
              <h1 className='mb-4'>WELCOME TO FILM NEST</h1>
              <h5 className='mb-4 intro-sentance' >Best free Movies &amp; TV Shows website !!</h5>
              <Link
                className='m-2 homeMovie'
                as='a'
                to="/movie/0"
                rel='nofollow'
                variant='outline-light'
                size='lg'
              >
                Browse Movies
              </Link>
              <Link
                className='m-2 homeTv'
                as='a'
                to="/tv/1"
                variant='outline-light'
                size='lg'
              >
                Browse TV Shows
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
