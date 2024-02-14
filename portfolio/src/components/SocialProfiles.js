import React from "react";
import SOCIALS from "../data/socialProfiles"
import SocialProfile from './elements/SocialProfile'
class SocialProfiles extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h2>تواصل معي</h2>
                {SOCIALS.map((social)=><SocialProfile key={social.id} social={social}/>)}
            </div>
        )
    }
}
export default SocialProfiles