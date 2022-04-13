import React from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../Styles/Footer.css';
import image1 from "../Assets/Images/add-gray-s.svg"
import image2 from "../Assets/Images/sad-gray-w.svg"
import image3 from "../Assets/Images/rec-gray-s.svg"
import image4 from "../Assets/Images/share-gray-s.svg"
import image5 from "../Assets/Images/logo-telecine.svg"

export default function Footer({
  data
}) {

const [selected, setSelected] = useState("general")

    return (
<div className="footer">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse active" id="navbarFooter">
          <div id ="wrapper" className="navbar-nav ml-auto">
            <div className='menu'>
              <ul className="footer-item">
                <li style={{ color: 'white' }} id="menu-buttom" onClick={() => setSelected("general")} className={`nav-link ${selected === 'general' ? 'active' : ' '}`}>GENERAL</li>
              </ul>
              <ul className="footer-item">
              <li style={{ color: 'white' }} id="menu-buttom" onClick={() => setSelected("elenco")} className={`nav-link ${selected === 'elenco' ? 'active' : ' '}`}>ELENCO</li>
              </ul>
              <ul className="footer-item">
              <li style={{ color: 'white' }} id="menu-buttom" onClick={() => setSelected("premios")} className={`nav-link ${selected === 'premios' ? 'active' : ' '}`}>PRINCIPALES PREMIOS</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="telecine-brand" href="#"><img className="logo" src={image5} alt="logo"/></ul>
      </nav>
        <div id="black-line"></div>
  <div id="select">
    {selected==="general" && (
      <div style={{ color: 'white' }} id="images">
        <ul className="navbar-brand" href="#"><img className="logo" src={image1} alt="logo" />
        <p id="legenda" style={{ opacity: '0.3'}}>Mi lista</p>
        </ul>
        <ul className="navbar-brand" href="#"><img className="logo" src={image2} alt="logo" />
        <p id="legenda" style={{ opacity: '0.3'}}>Evaluar</p>
        </ul>
        <ul className="navbar-brand" href="#"><img className="logo" src={image3} alt="logo" />
        <p id="legenda" style={{ opacity: '0.3'}}>Grabar</p>
        </ul>
        <ul className="navbar-brand" href="#"><img className="logo" src={image4} alt="logo" />
        <p id="legenda" style={{ opacity: '0.3'}}>Compartir</p>
        </ul>
          <p> SINOPSE <br/> {data?.Synopsis}</p>
      </div>
    )}

    {selected==="elenco" && (
      <div id="cards">
        {data && data?.Cast?.map(data =>
          <tr key={data?.Cast}>
            <div className='card' style={{ color: 'white' }}>{data?.Name}</div>
          </tr>
        )}
      </div>
    )}

    {selected==="premios" && (
      <div id="cards">
        <p className='card' style={{ color: 'white' }}>4th Critics' Choice Television Awards</p>
        <p className='card' style={{ color: 'white' }}>19th Satellite Awards</p>
        <p className='card' style={{ color: 'white' }}>2014 IGN Awards</p>
      </div>
    )}
  </div>
</div>
    )

    }