
import "../component/atm.css"
import { useState, useEffect } from "react";



function Atm(){

  const [No, setNo] = useState(["_","_","_","_","_","_","_","_","_","_"])

  const yo = {No,setNo}
  console.log(No)

  return(
    <>
      <AtmCard No={[No]}/>
      <Input {...yo}/>
    </>
  )
}

function AtmCard(numbers){
  
  console.log(typeof numbers)
  return(

    <div className="atm">
      <h2>
       {
        numbers.No.map((no)=>{

          return <span>{no}</span>
        })
        
       }
      </h2>
    </div>
  )
}



function Input(obj){


  const addNo=(e)=>{
    let newArr = e.target.value
    const stateArr = ["_","_","_","_","_","_","_","_","_","_"];

    newArr = newArr.split('').map(Number);
    console.log("new arr",newArr, " old arr", stateArr);
    

    for(var i = 0; i < newArr.length; i++){

      stateArr.splice(i,1,newArr[i]);
      
    }
    console.log(stateArr,"state arr")
    obj.setNo(stateArr)
    
  }

  return(

    <div className="input-container">

      <input onChange={addNo} type="number"  max="10" min="10"/>
    </div>
  )
}
export default Atm;

