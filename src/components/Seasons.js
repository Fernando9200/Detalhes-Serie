import React from 'react';
import { useState } from 'react';
import useFetch from './useFetch';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '../Styles/Seasons.css';
import image6 from "../Assets/Images/play-small-player-w.svg"



export default function Seasons () {


  const [data,loading,error] = useFetch('https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json')


  const [selected, setSelected] = useState("T1")

  return (
<div>
  <div id="container-season" className="navbar navbar-expand-lg">
    <div className="collapse navbar-collapse">
      <div className="navbar-nav ml-auto">
        <ul className="nav-item">
          <li id="menu-buttom" style={{ color: 'white' }} onClick={() => setSelected("T1")} className={`nav-link ${selected === 'T1' ? 'active' : ' '}`}>T1</li>
        </ul>
        <ul className="nav-item">
          <li id="menu-buttom" style={{ color: 'white' }} onClick={() => setSelected("T2")} className={`nav-link ${selected === 'T2' ? 'active' : ' '}`}>T2</li>
        </ul>
      </div>
    </div>
  </div>
  <div>
    {selected==="T1" && (
    <div id="content">
      {data && data?.map(data => { if(data?.SeasonNumber===1){ return(
        <div id="line-between" key={data?.EpisodeNumber}>
          <div>
            <div style={{ color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + data?.EpisodeNumber}>{data?.EpisodeNumber} {data?.Title}</div>
            <img id="play" className="logo" src={image6} alt="logo" />
          </div>
          <div id={"collapse-" + data?.EpisodeNumber} class="collapse">
            <img className='Image' src={data?.Image} />
              <br/> 
            <p style={{ color: 'white' }} id="text-size">{data?.Synopsis}</p>
          </div>
        </div>)} return <></>
                      
        })}
    </div>
    )}

    {selected==="T2" && (
      <div id="content">
        {data && data?.map(data => { if(data?.SeasonNumber===2){ return(
          <div id="line-between" key={data?.EpisodeNumber}>
            <div>
              <div style={{ color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + data?.EpisodeNumber}>{data?.EpisodeNumber} {data?.Title}</div>
              <img id="play" className="logo" src={image6} alt="logo" />
            </div>
            <div id={"collapse-" + data?.EpisodeNumber} class="collapse">
              <img className='Image' src={data?.Image} />
              <br/> 
              <p style={{ color: 'white' }} id="text-size">{data?.Synopsis}</p>
            </div>
          </div>)} return <></>
                      
        })}
      </div>
    )}
  </div>
</div>

    );



}