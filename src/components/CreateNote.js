import React, { useState ,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import {userContext} from '../App'
import { DesktopWindows } from '@material-ui/icons';


const CreateNote = (props) => {

    const { state, dispatch } = useContext(userContext);
    
    

    const obj = {
        
        text: ""
    }
    const [note, setNote] = useState(obj);

    const itemEvent = (event) => {
        const { name, value } = event.target;
        setNote((prev) => {
            
            return {
               
                [name]: value,
                date: new Date(),
                completed:false
            }

        });


    };

    const setIteam = () => {
       
        // console.log(note)
        // console.log(state)
        
        setNote(obj)
  if(note.text!=""){
    if(state.length==0){
        console.log("zero hai beta")
        if(JSON.parse(localStorage.getItem("notes"))==undefined){
            dispatch({ type: "ADD", payload: note })
            let arr=state;
            arr.push(note)
            localStorage.setItem("notes",JSON.stringify(state))
        }
        else{
        let arr=JSON.parse(localStorage.getItem("notes"))
        arr.push(note)
        console.log(arr)
        localStorage.setItem("notes",JSON.stringify(arr))
        dispatch({ type: "UPDATE", payload: arr })
        //localStorage.setItem("notes",JSON.stringify(newstate))
        props.change()
        }
    }
    else{
        console.log("pata nhi")
     dispatch({ type: "ADD", payload: note })
     let arr=state;
     arr.push(note)
     localStorage.setItem("notes",JSON.stringify(state))
    }
    }
    }
   const clear=()=>{
       localStorage.clear("notes")
       window.location.reload();
   }
    return (
        <>
            <div className="mainflex">
            <div className="main">

                {/* <input type="text" placeholder="#hash_tag" name="title" autoComplete="off"  /> */}
                <textarea placeholder="Write A Note" name="text" onChange={(e) => { itemEvent(e) }} value={note.text} />
                <Button onClick={setIteam}><AddIcon /></Button>
                <Button style={{float:"right"}}  onClick={clear}>< RemoveCircle /></Button>
               


            </div>
            </div>

        </>
    );
}

export default CreateNote;
