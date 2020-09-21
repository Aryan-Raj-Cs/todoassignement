import React, { useState ,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckCircle from '@material-ui/icons/CheckCircle';
import {userContext} from '../App'
import Checkbox from '@material-ui/core/Checkbox';


const Notes = (props) => {
    const [count,setCount]=useState(0)
    //console.log(props.obj)
    const { state, dispatch } = useContext(userContext);
    const complete =(date)=>{
        let newstate=[]
        if(state.length!=0){
        newstate = state.map(val=>{
           if(val.date==date && !val.completed){
               val.completed=true;
               val.completedtime=Date.now();
               
           }
           return val;
       })

    }
    else{
         newstate = JSON.parse(localStorage.getItem("notes")).map(val=>{
            if(val.date==date && !val.completed){
                val.completed=true;
                val.completedtime=Date.now();
                
            }
            return val;
        })
  
    }



       
       dispatch({ type: "UPDATE", payload: newstate })
       localStorage.setItem("notes",JSON.stringify(newstate))
       setCount(count+1)
       
      
       props.change()
    }

    const search=(e,data)=>{
       // e.stopPropagation();
       // console.log(data)
        props.showhastag(data)
       
    }
    const hashtag=()=>{

       let arr=props.obj.text.split(" ");
       let allhastag=arr.map(val=>{

        if(val.startsWith("#"))
         return <a href="#"  onClick={(e)=>{search(e,val)}} >{val+" "}</a>


         else{
            return val+" ";
         }
        })
        return allhastag
    }

    return (
        <>

            <div className="notes" 
            
            onClick={()=>{complete(props.obj.date)}}
            >

                
                {/* <textarea placeholder="Write A Note" name="text"  value={props.obj.text} /> */}
                <p>{hashtag()}</p>
                {/* <p>{props.obj.text}</p> */}
                <div style={{display:"flex"}}>
                    <div style={{margin:"10px"}}>
                <span><strong>{props.obj.date.toString().substring(8,18)}</strong></span>
                    </div>
                    {props.obj.completed ? <>
                        <div style={{ margin: "10px" }}><strong>Completed</strong>  </div>
                        <div style={{ margin: "10px" }}>
                            <CheckCircle style={{ color: "green" }} />
                        </div>
                    </> :
                        <>
                            <div style={{ margin: "10px" }}><strong>InProgress</strong>  </div>
                            <div style={{ margin: "10px" }}>
                                <CheckCircle style={{ color: "yellow" }} />
                            </div>
                        </>


                    }
                 </div>
            </div>

        </>
    );
}

export default Notes;
