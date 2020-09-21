import React, { useState ,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Notes from './Notes'
import {userContext} from '../App'


const AllNote = () => {
    
    const { state, dispatch } = useContext(userContext);
    const [change,setChange]=useState(false)
    const [tags,setTags]=useState([])
    const [append,setAppend]=useState([])
    const [match,setMatch]=useState("")
    const [show,setShow]=useState(false)
    const changefun=()=>{
        if(change){
            setChange(false)
           
        }
        else{
            setChange(true)  
            
        }
    
    }
    const completed=()=>{
        
    //   console.log(com.length)

    let com1=[];

    if(JSON.parse(localStorage.getItem("notes"))==undefined){
          com1=state.filter(val=>{
            if(val.completed){
                return true
            }
            else{
               return  false
            }
           
         
        })
    }
    else{

    
          com1=JSON.parse(localStorage.getItem("notes")).filter(val=>{
            // com1=state.filter(val=>{
           if(val.completed){
               return true
           }
           else{
              return  false
           }
          
        
       })
    }
      // console.log(com1)

       com1.sort(function(a,b){
      
        if((a.completedtime)>(b.completedtime)){
          return  1
        }
        else{
          return -1
        }
      
        
      })

      let com=[];
      if(com1.length>0)
      com=com1.map(val=>{
       if(val.completed){
           return <Notes obj={val} change={changefun} showhastag={showhastag}/>
       }
      
    
   })
       return com.reverse();
    }
    const uncompleted=()=>{
        let uncom=[]
         if(state.length>0){
           // let uncom=JSON.parse(localStorage.getItem("notes")).map(val=>{
                  uncom=state.map(val=>{
                if(!val.completed){
                    return <Notes obj={val} change={changefun} showhastag={showhastag}/>
                }
     
                
            })
     
         }

         else{
             if(JSON.parse(localStorage.getItem("notes"))==undefined){
                         let uncom=state.map(val=>{
                    if(!val.completed){
                        return <Notes obj={val} change={changefun} showhastag={showhastag}/>
                    }
         
                    
                })
                
             }

             else{

             
                uncom=JSON.parse(localStorage.getItem("notes")).map(val=>{
                //let uncom=state.map(val=>{
                    if(!val.completed){
                        return <Notes obj={val} change={changefun} showhastag={showhastag}/>
                    }
         
                    
                })
            }
         }
          
       return uncom.reverse();
    }
  
    const showhastag=(data)=>{
    console.log(data)
     setShow(true)
     setMatch(data)
     
     

    }
    const showtag=(data)=>{
        console.log(data)
        
        const arr=state.map(val=>{
      if(val.text.includes(data))
       return <Notes obj={val} change={changefun}  showhastag={showhastag} />
       console.log(val.text.includes(data))
        })
        // setTags([...tags,...arr])
          return arr;  
    
    
        }
    

    

    return (
        <>

        <div className="mainflex">
       {show ?
       <>
       {showtag(match)}
       
       </>:
    
       <>
        {uncompleted()}
        {completed()}
        </>
    }
        </div>

        </>
    );
}

export default AllNote;
