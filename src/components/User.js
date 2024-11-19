import { useEffect, useState } from "react";


const User = ({ name }) => {
    const[count] = useState(5)
      
    useEffect(()=> {
        const timer = setInterval(()=>{
           console.log("intervl") ;
        },1000);
        return()=>
            clearInterval(timer);
    },[])


 

    return(
        <div className="User">
            <h1>count: {count}</h1>
            <h1>Name: {name}</h1>
            <h2>Location: hyderabad</h2>
            <h2>Contact: Sbale160@gmail.com</h2>
        </div>
    )
}
export default User;