import React from "react";
import CardArtist from "../../Components/CardArtist/CardArtist";
import './mainpage.css';
import Data  from "../../../data";


function MainPage(){
    return(
        <>
        <div className="header">
            <h1>Australia's most trusted artist directory</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a<br/>
                liquip ex ea commodo consequat.</p>
            <div className="buttons">
                <button>View featured Artist</button>
                <button>Artist near me</button>
            </div>
        </div>
        <div className="directory">
            <CardArtist data={Data}/>
          
        </div>
        </>
    )
}

export default MainPage