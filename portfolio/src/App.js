import React from "react";
import Profile from "./components/Profile";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import SocialProfiles from "./components/SocialProfiles";
import Title from "./components/Title";

class App extends React.Component{
    render(){
    return (
        <>
        <div className="row">
            <Title/>
            <div className="column">
                <Profile/>
            </div>
            <div className="column">
                <Qualification/>
            </div>
        </div>
        <hr/>
        <Skills/>
        <hr/>
        <SocialProfiles/>
        </>
    )
    }
}

export default App