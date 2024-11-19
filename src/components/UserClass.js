import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
         
        this.state={
            userInfo:{
                login: "Loading..",
                location: "loading.."
            }
        }

        
    }
  
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shivakumar-bale");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
    }
   
    render(){
        const{login, location} = this.state.userInfo;
       
        return(
            <div className="User">
                
                <h1>Name: {login}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: Sbale160@gmail.com</h2>
            </div>
        );
    };
}
export default UserClass; 
 