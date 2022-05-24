import React, { useState } from "react";
import Images from "./Images";


function App() {
  const [data, setData] = useState(Images);
  const [yes, setYes] = useState(0);

  const selectCategory = (category) => {
    const upDatedArray = Images.filter((element) => {
      var matched=false;
      for(var i of element.category){
        if(i==category){
          matched=true;
          break;
        }
      }
      return matched && element.withPhoto==yes;
    });
    setData(upDatedArray);
  };

  const change = (type) => {
    setYes(type);
    const upDatedArray = Images.filter((element) => {
      return element.withPhoto === type;
    });
    setData(upDatedArray);
    
  };

  const button = {
    backgroundColor: "white",
    padding: "10px",
    borderRadius:"5px",
    margin:"10px"
  };

  const buttonClass = {
    display: "flex",
    justfyContent: "center",
  };

  const lengthStyle={
    border:"0px solid white",
    backgroundColor:"white"
  }


  /*Randomizing the object*/

  var listKeys = Object.keys(Images);
  var randomIndex = Math.floor(Math.random() * listKeys.length);
  var randomObject = Images[listKeys[randomIndex]];
  console.log(listKeys);

  return (
    <div>
      <div className="buttonclass" style={buttonClass}>
        <button style={button} onClick={() => change(true)}>
          With Photo
        </button>
        <button style={button} onClick={() => change(false)}>
          WIthout Photo
        </button>
        <button style={button} onClick={() => selectCategory("Basic")}>
          Basic
        </button>
        <button style={button} onClick={() => selectCategory("Creative")}>
          Creative
        </button>
        <button style={button} onClick={() => selectCategory("Professional")}>
          Professional
        </button>
        <button style={button} onClick={() => setData(Images)}>
          All photos
        </button>
        <button style={lengthStyle}><h1>{data.length}</h1></button>
      </div>
      <div style={buttonClass}>
        {data.map((element) => {
          return (
            <div
              style={{
                border: "2px grey solid",
                margin: "10px",
                width: "200px",
              }}
            >
              <p>{element.name}</p>
              <img
                src={element.image}
                alt=""
                key={element.id}
                width="200px"
                height="300px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
