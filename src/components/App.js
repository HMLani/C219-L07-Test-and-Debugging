import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { courses };
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Courses</a>
            </div>
          </nav>
        </div>
        <div>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <Grid items={this.state.courses} />
        </div>
      </div>
    );
  }
}
