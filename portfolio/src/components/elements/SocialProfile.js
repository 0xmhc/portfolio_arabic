import React from "react";

class SocialProfile extends React.Component{
    render(){
        const {image,link} = this.props.social
        return(
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt="social" style={{width:20,margin:5}}/>
                </a>

        )
    }
}
export default SocialProfile