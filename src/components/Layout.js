import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home({
    children
}) {

  const styleBackground={
      backgroundImage: 
"linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://occ-0-894-1123.1.nflxso.net/art/0ef00/005f864851e4be98e96f55020ce769fba680ef00.jpg')",
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }


  return (
    <div style={styleBackground}> 
            {children}
    </div>
  );
}