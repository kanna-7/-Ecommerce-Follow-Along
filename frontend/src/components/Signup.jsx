import React from 'react'
import "./signup.css";
const Signup = () => {
    const[userDetails, setUserDetails] = useState({
        name:"",
        email:"",
        password:""
    })
    function handleInput(event){
        console.log(event.target.value);
        setUserDetails({...userDetails,[event.target.name]:event.target.value});
    }
    async function handlesubmit(){
        if(userDetail.name ==""){
            alert("Name is required");
            return;
        }
        if(userDetail.email ==""){
            alert("Email is required");
            return;
        }
        if(userDetail.password ==""){
            alert("Password is required");
            return;
        }
        try{
            const data = await axios.post("http://localhost:8080/signup");
            console.log(data);
            alert("Signup successfull");

        }catch (error){
            console.log(error);
            alert("something went wrong");
        }
    }

  return (
    <div className='signup'>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name='name' placeholder='Name...' />
        <label htmlFor="">Email</label>
        <input type="email" name='email' placeholder='Email...' />
        <label htmlFor="">Password</label>
        <input type="password" name='password' placeholder='password...'/>
        <input type="submit" />
      </form>
    </div>
  )
}


export default Signup

