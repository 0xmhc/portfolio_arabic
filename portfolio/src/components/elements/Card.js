import React from "react";

const Card = (props) =>{
    const {title,content,image,link} = props.skill 
    return (
        <div className="card">
                <div>
                    <img src={image} alt="skill" style={{width:'100%'}}/>
                    <h3 style={{color:"gray",fontSize:20}}>{title}</h3>
                    <p style={{fontSize:17,padding:4}}>{content}</p>
                    <button onClick={() => window.open(link,'_blank')}>Enroll</button>
                </div>
            </div>
    )
}
export default Card