import './App.css';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="Login_block">
          <input type="text" placeholder="email" />
          <input type="pasword" placeholder="password" />
          <input type="submit" />
        </div>
      </div>
    );
  }
}
