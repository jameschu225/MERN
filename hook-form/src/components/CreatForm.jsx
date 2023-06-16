import React, {useState} from 'react'

const CreatForm = () => {
    const [firstName, setfirstName] =useState("");
    const [lastName, setlastName] =useState("");
    const [email, setemail] =useState("");
    const [password, setpassword] =useState("");
    const [confirmPassword, setconfirmPassword] =useState("");


  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="firstname">FirstName</label>
                <input type="text" id="firstname" value={firstName} onChange={(event) => {setfirstName(event.target.value)}}/>
            </div>
            <div>
                <label htmlFor="lastname">LastName</label>
                <input type="text" id="lastname" value={lastName} onChange={(event) => {setlastName(event.target.value)}}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={(event) => {setemail(event.target.value)}}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(event) => {setpassword(event.target.value)}}/>
            </div>
            <div>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" id="confirmpassword" value={confirmPassword} onChange={(event) => {setconfirmPassword(event.target.value)}}/>
            </div>

        </form>

        <div>
            <h2>Your Form Data</h2>
            <p>First name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        
    </div>
  )
}

export default CreatForm