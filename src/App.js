import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
        </header>
        <div>
          <Plot
          data={[
            
            {
              type: 'bar', 
              x: ["Ashley Powell","Birdie Kirkman","Brian Thornburg","Bryan Martin","Bubba Rosenbaum","Cam pearce","Cameron Powell","Carson Edmiston ","Chris Dunn","Chuck Mauro","conan","Dave O","Dave Obringer","David Campbell","David E","Deb Love","Dustin Stollmack","Gary Rosenbaum","Gregory Burke","Hal Pratt","Holli Rehm","J. Brim","Jeff Howard","Jeff Mattox","Jeffrey Perkins","Jen Powell","Jim Pearce","John Bradley","Jonathon Powell","JRK#1","Julie Chenoweth","Kathy N","Katie Edmiston","Kevin Monahan","Kim Stephenson","Larry Rocamora","Linda T. Maultsby","Logan of the Hill People","LT","Maddy Pearce","Mark Bozymski","Mark Ray","Mel Black","Mel Black","Mike Edmiston 1","Mike Werner","Miles Dunn","Paul Stephenson","Pete","Pete's Dad","Roger","Russell Goto","Sam S","Sequoia#12","Sequoia#12","Sharon E","Sherry Stuckey","Terry Holthauser","Tim M","Tim Rabalais","Tom Mills","turd ferguson","Uncle Rusty","Zach"],
              y: [24,17,27,21,34,32,28,24,29,17,21,18,17,16,19,21,20,21,18,19,21,25,25,20,31,15,16,32,26,25,30,33,24,33,31,17,29,12,30,19,32,18,21,24,19,24,21,25,21,18,25,21,24,22,22,27,19,20,24,31,18,21,22,19]},
          ]}
          layout={ {width: 1000, height: 1000, title: 'A Fancy Plot'} }
        />
        </div>
      </div>
    );
  }
}

export default App;
