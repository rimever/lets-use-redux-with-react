import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAge, setName} from "./actions/userActions";
class App extends Component {
  clickSetName() {
    this.props.setName("Taro Yamada");
  }
  clickSetAge() {
    this.props.setAge(30);
  }
  render() {
    return (
        <div>
          <button onClick={this.clickSetName.bind(this)}>Set Name</button>
          {this.props.name}<br/>
          <button onClick={this.clickSetAge.bind(this)}>Set Age</button>
          {this.props.age}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name:state.name,
    age:state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName:(name) => dispatch(setName(name)),
    setAge:(age) => dispatch(setAge(age))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)