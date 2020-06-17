import React, { Component } from "react";
import Switch from "react-switch";
import './ToggleSwitch.scss';
 
class ToggleSwitch extends Component {

  state = { 
    iLoved: false,
    willLove: false,
    enough: false
  };

  componentDidMount () {
    this.setState({ 
      iLoved: this.props.mealData.iLoved,
      willLove: this.props.mealData.willLove,
      enough: this.props.mealData.enough
    })
  }
 
  handleChange1 = (iLoved) => {
    this.setState({ iLoved });
  }
  handleChange2 = (willLove) => {
    this.setState({ willLove });
  }
  handleChange3 = (enough) => {
    this.setState({ enough });
  }
 
  render() {
    return (
      <>
        <label className="switch">
            <span className="switch__text">iLoved!</span>
            <Switch name="iLoved" onChange={this.handleChange1} checked={this.state.iLoved} value={this.state.iLoved ? true:false}/>
        </label>
        <label className="switch">
            <span className="switch__text">willLove!</span>
            <Switch name="willLove" onChange={this.handleChange2} checked={this.state.willLove} value={this.state.willLove ? true:false}/>
        </label>
        <label className="switch">
            <span className="switch__text">enough!</span>
            <Switch name="enough" onChange={this.handleChange3} checked={this.state.enough} value={this.state.enough ? true:false}/>
        </label>
      </>
    );
  }
}

export default ToggleSwitch;