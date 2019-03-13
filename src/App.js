import React, { Component } from 'react';
import './App.css';
import axios from './axios-firebase';
import Forms from './component/form/form';
// import firebase from ''
import List from './component/list/list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      usname: '',
      age: null,
      address: '',
      email: '',
    }
  }
  clicked = () => {
    let data = [{
      user_name: this.state.usname,
      age: this.state.age,
      address: this.state.address,
      email: this.state.email,
    }]
    axios.post('/postinfomation.json', data).catch(err => alert(err))
  }
  getData = () => {
    axios.get('/getinfomation.json').then(response => {
      this.setState({
        listUser: [response.data]
      })
    })
    .catch(err => alert(err))
  }
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    console.log(this.state.listUser)
    return (
      <div>
        <div className="wapper">
          <Forms changeHandle={this.changeHandle} clicked={this.clicked} getData={this.getData}></Forms>
          <List data={this.state.listUser} />
        </div>
      </div>
    );
  }
}

export default App;
