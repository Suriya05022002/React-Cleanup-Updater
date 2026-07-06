import { useEffect, useState } from "react";

function Counter(){
    const[count,setCount]=useState(0);

    function increment()
    {
         setCount (preCount=>preCount+1);
          setCount (preCount=>preCount+1);
    }
         useEffect ( ()=> {
            console.log(count);
         },[]);

         return(
            <>
            <h2 className="m-5">{count}</h2>
            <button className="m-5" onClick={increment}>UP</button>
            
            </>
         );
        
    }
  

export default Counter