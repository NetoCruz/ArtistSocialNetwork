import React from "react";
import "./profile.css"
import { useParams } from "react-router-dom";

function Profile({data}){
    const {id} = useParams()
  return(
    data
    .filter(list => list.id === parseInt(id)  )
    .map((item) => (
       <div className="mainprofile">
        <div className="gallery" id="photos">
            <img src="cat1.jpg" alt="" />
            <img src="cat2.jpg" alt="" />
            <img src="cat3.jpg" alt="" />
            <img src="cat4.jpg" alt="" />
            <img src="cat3.jpg" alt="" />
            <img src="cat4.jpg" alt="" />
            <img src="phto01.jpg" alt="" />
        </div>
        <div className="about">
            <div className="names">
                <h2>{item.name}</h2>
                <div className="badge">
                    <p>VERIFIED</p>
                    <p>FEATURED</p>
                </div>
                <div className="adress">
                     <p>{item.ocupation}</p>
                <p>{item.location}</p>
                </div>
               
                <div className="buttons">
                    <button>Call me</button>
                    <button>Email me</button>
                    <button>Follow</button>
                </div>
                <div className="separator"></div>
            </div>

             <div className="info">
            <div className="text">
                <h4>About me</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <h4>My Services</h4>
                <div className="servlist">
                    <p>Photo</p> <p>Edition</p>
                </div>

                <h4>My Interests</h4>
                <div className="servlist">
                    <p>Comedy</p> <p>Hicking</p>
                </div>

            </div>
            <div className="separator"></div>
            
        </div>
        </div>
       
    </div> 
    )
)
  )
}

export default Profile