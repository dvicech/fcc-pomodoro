import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m2">
                <div className="card">
                  <div className="card-content">
                    <div className="card-title">Pomodoro Clock</div>
                    <h1>00:00</h1>
                    <button className="btn">Start</button>
                    <div className="row">
                      <div className="col s6">
                        <h5>Break Length</h5>
                        <div style={{ margin: '10px' }}>Up 5 Down</div>
                      </div>
                      <div className="col s6">
                        <h5>Session Length</h5>
                        <div style={{ margin: '10px' }}>Up 25 Down</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
