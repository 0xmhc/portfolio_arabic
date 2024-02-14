import React,{Component} from "react"

class Amthal extends Component{
    constructor(){
        super()
        this.state = {
            mathal:{},
            amthal:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3004/amthal/random")
        .then(response => response.json())
        .then(data => this.setState({mathal:data}))
    }
    fetchAmthal = ()=>{
        fetch("http://localhost:3004/amthal/ten")
        .then(response => response.json())
        .then(data => this.setState({amthal:data}))
    }

    render(){
        return (
            <div>
                <h2>مثل اليوم</h2>
                <p>{this.state.mathal.title}</p>
                <hr/>
                <p> هل تريد مزيد من امثلة؟</p>
                <button onClick={this.fetchAmthal}>امثال</button>
                {
                    this.state.amthal.map((mathal)=>{
                        return <p>{mathal.title}</p>
                    })
                }
            </div>
        )
    }
}
export default Amthal