
function Card({name = "Anonymous", 
background = "N/A"}){
    return(
        <div className="intro">
            <img className="cardPic" src="https://placehold.co/200x200"></img>
            <h3>{name}</h3>
            <p>{background}</p>    
        </div>
    );
}

export default Card