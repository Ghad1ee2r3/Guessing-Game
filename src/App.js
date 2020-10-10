import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";


import { v4 as uuidv4 } from 'uuid';
import { render } from '@testing-library/react';
//let intial =[1 , 2]
function App() {


let j = Math.floor(Math.random() * (100 + 1));

const[previose,setPreviose]=React.useState([]);
const[listtest,setListtest]=React.useState([]);
  
   const [finalresult, setfinalresult] = React.useState(" ");
   const [resultboolean, setresultboolean] = React.useState(false);



  const [result, setResult] = React.useState("Help Conan to find a secret number to solve this guessing game");
  const[number , setNumber]= React.useState(0);
  const[attempts , setAttempts]= React.useState(5);

  const[secretnumber , setSecretnumber]=React.useState(j);

 
  
 function handleChange(event) {
  setNumber(event.target.value);
}

function handleChangenum(num) {
  setNumber(num);
}

function checknumber(){
  setListtest([])
  const num =  number
 

  
  if (previose.includes(num)){
    setResult("you are already tested this number try diffrent")
  }else{
    setNumber(num);
   if(num==secretnumber+1 || num==secretnumber-1 && attempts>=1){
    setResult("Your guessing is very close")
    setAttempts(attempts - 1)
    
  }else if (num<secretnumber && attempts>=1){
  setResult("Your guessing is too weak!")
  setAttempts(attempts - 1)
  setfinalresult("Failed !! End attempts , if you want try again click button below ")

 }else if(num>secretnumber && attempts>=1){
  setResult("Your guessing is big than secret number")
  setAttempts(attempts - 1)
  setfinalresult("Failed !! End attempts ")

 }else  if(num==secretnumber && attempts>=1){
  setResult("congratulation, you are win ")
  setAttempts(attempts - 1)
  setfinalresult("congratulation you guessed correct!! , If you want playing again click button below")
  setresultboolean(true);
 }else  if( attempts<=0){
  setfinalresult("Failed !! ")
 }previose.push(num)}
 
 

}




function listdisplay(){
  
  let listtest=[]
  let lengthlist=attempts*2
  for (let i = 1; i <lengthlist; i++) {// length need decrese depond on attemp number
   
   j = Math.floor(Math.random() * (100 + 1));
  
    //if(j==1)//to random
    if (i==1){
      listtest.push(secretnumber-1)
    }
   listtest.push(j)

   
}
return  listtest.map((item,index) => 
<div id ="oracle">


<li  key ={index} > <button class="hint" onClick={()=>handleChangenum(item)}>{item}</button> </li>


</div>)}


function refreshPage(){
  window.location.reload();
} 


function display(){//more hint change value hint to find hint button 
  setListtest([])
  return setListtest(listdisplay)
 
 }


 const getContentView = () => {
  if (attempts>=1 && resultboolean ===false ) {
    return <div><p className="text3">{result}</p>
     
    <input  placeholder="1-100" name="num" type="number" value={number} onChange={handleChange} />
   <div class="row"> <button  class="btn btn-info"   onClick={checknumber}>Result</button>
  
    <button  class="btn btn-info"  onClick={refreshPage}>surrender</button>
    <button class="btn btn-info"  onClick={display} >seek wisdom</button></div>
    <img class="my-imgfirst" src="https://thumbs.gfycat.com/SingleIdolizedAsianlion-size_restricted.gif"></img>
    
    <img class="my-img" src=""></img>


    <div>{listtest}<p></p></div>
    <p class ="test"> {attempts} More Attempts Until End Game</p></div>;
  } else {
    return setView();
  }
};


const setView = () => {
  if (number==secretnumber) return <div><img class="my-img" width="300" src="https://3.bp.blogspot.com/-26UcuwAfGfk/WDgFg2gkygI/AAAAAAALfmw/HoadaCdfARow2vp56DhHlX-xXwHx5tzQQCLcB/s1600/AS001277_00.gif?time=Thu%20Oct%2026%202017%2007:59:00%20GMT+0200%20(Egypt%20Standard%20Time)" /><p></p><h2 class="text3">{finalresult}</h2>
  <button  class="btn btn-info"  type="submit"  onClick={refreshPage}>Again</button></div>
  return <div><img class="my-img" width="300" src="https://thumbs.gfycat.com/WeeklySecondaryEquine-size_restricted.gif" /><p></p><h2 class="text3">{finalresult}</h2>
  <button  class="btn btn-info" type="submit"  onClick={refreshPage}>Again</button></div>;
};


  return (
    <div className="App">
      <h1 class="text1">Guessing Game</h1>
    {getContentView()}
    </div>
  );
}

export default App;
