import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: [
				{
					title: "Business Website",
					category: "Web Design"
				},
				{
					title: "Social App",
					category: "Mobile Development"
				},
				{
					title: "Ecommerce Shopping Cart",
					category: "Web Development"
				}
			]
		}
	}
  render() {
    return (
	    
	    //everything has to be in this top element
      <div className="App">
      	My App
      	<Projects projects={this.state.projects} />

      </div>
    );
  }
}

export default App;
