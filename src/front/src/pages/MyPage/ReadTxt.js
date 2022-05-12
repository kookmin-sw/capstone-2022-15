import React, {Component} from 'react';

class Example extends Component {
  handleChange(e){
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
  }
  render(){
    return (
      <div>
        <input type="file" onChange={tihs.handleChange.bind(this)} />
      </div>
    );
  }
}