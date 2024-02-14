import React,{Component} from "react"

const TITLES = [
    "a developer web full stack",
    "a poor man",
    "an enthusiastic learned"
]
class Title extends Component{
    constructor(){
        super()
        this.state = {
            titleIdx : 0,
            fadeIn : true
        }
    }
    componentDidMount(){
        this.animateTitle()
        this.timeout = setTimeout(()=>{
            this.setState({fadeIn:false})
        },2000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
        clearTimeout(this.timeout)
    }
    animateTitle(){
        this.interval = setInterval(()=>{
            const titleIdx = (this.state.titleIdx + 1) % TITLES.length
            this.setState({titleIdx,fadeIn:true})
            this.timeout = setTimeout(()=>{
            this.setState({fadeIn:false})
        },2000)
        },4000)
        
    }
    render(){
        return (
            <p className={this.state.fadeIn? "title-fade-in":"title-fade-out"}>
                I am {TITLES[this.state.titleIdx]}
            </p>
        )
    }
}
export default Title