import React from "react";
import './cardartist.css'
import { Link } from "react-router-dom";


function CardArtist({data}) {
   
 return(
    data
    .map((item)=>(
       <Link to={`/profile/${item.id}`} className="card">
    <div  key={item.id}>
        <div className="image">
            <img src={item.img}alt="" />
            <div className="badges">
                <div className="star bk">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-3 w-3 sm:h-4 sm:w-4">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon></svg>
                </div>
                <div className="flight bk">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane h-3 w-3 sm:h-4 sm:w-4"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                </div>
                <div className="price bk">
                    <span>$1200.00</span>
                </div>
            </div>
            <div className="bottonbadge bk">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark "><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
            </div>
            
           
        </div>
        <div className="info">
            <h4>{item.name}</h4>
            <div className="skill">
                <p>{item.ocupation}</p>
                <p>{item.location}</p>
            </div>
        </div>
    </div>
    </Link> 
 )

    ))
   
}

export default CardArtist