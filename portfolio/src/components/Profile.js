import React from "react";
import profileImage from "../assets/profile.jpg"

class Profile extends React.Component{
    constructor(){
        super()
        this.myStyle = {width:"200px",height:"200px",borderRadius:"100px"}
        this.btnStyle  ={backgroundColor: "teal",color:"white",fontSize:"18px",outline:"none",border:"none",cursor:"pointer",padding:"10px",borderRadius:"10px"}
        this.state = {displayBio:false}
        this.handle = this.handle.bind(this)
    }
    handle(){
        // if(this.state.displayBio){
        //     // this.state.displayBio = false
        //     this.setState({displayBio:false})
        // }else{
        //     // this.state.displayBio = true
        //     this.setState({displayBio:true})
        // }
        this.setState({displayBio : !this.state.displayBio})
    }
    render(){
    return (
        <div>
            <img src={profileImage} className="profile" alt="profile"/>
            <h1>سلام عليكم</h1>
            <p>انا مبرمج تطبيفات الويب</p>
            {this.state.displayBio ? (
            <div>
                <p>تعلم مفتاح النجاح</p>
                <p>الرغبة كل شيئ</p>
                <button onClick={this.handle} style={this.btnStyle}>
                    اخفاء
                </button>
            </div>
            ):(
                <button onClick={this.handle} style={this.btnStyle}>
                    اضهار المزيد
                </button>
            )}
        </div>
    )
    }
}

export default Profile