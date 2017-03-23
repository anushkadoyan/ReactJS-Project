import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
	  console.log(this.props);
    return (
	    
	    //everything has to be in this top element
      <li className="Project">
	  	<strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
