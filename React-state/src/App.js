import React, {Component} from "react";
import './App.css'
import image from './nea.PNG'

class App extends Component {

  state = {
    fullName: "Ndifreke Asuquo.",
    bio: "One of the greatest programmer of all time.",
    imgSrc: image,
    profession: "Software developer.",
    boolShow: true,
    timeInterval: 0
  };

  handleBoolShow = () => {
    this.setState ({
      boolShow: !this.state.boolShow
    })
  }

  componentDidMount(){
    setInterval(() => this.setState({timeInterval:this.state.timeInterval + 1}), 1000)
  }
  
  render() {
    return (
      <div className="App">
        {this.state.boolShow && (
          <React.Fragment>
            <h1>Full Name: <i>{this.state.fullName} </i></h1>
            <h1>Bio: <i>{this.state.bio}</i></h1>
            <h1>Profession: <i>{this.state.profession}</i></h1>
            <br />
            <img src={this.state.imgSrc} height = '500' alt="Puta" />
            <br />
          </React.Fragment>
        )}

        <button style={{width: '120px', height: '40px', borderRadius: '10px', backgroundColor: "olive", color: 'white'}} onClick = {this.handleBoolShow} width= '200'>
          <i>Click Now</i>
        </button>

        <p>{this.state.timeInterval}</p>

      </div>
    )
  }
}

export default App

