import React, {useState} from 'react'

const CreatForm = () => {
    const [firstName, setfirstName] =useState("");
    const [lastName, setlastName] =useState("");
    const [email, setemail] =useState("");
    const [password, setpassword] =useState("");
    const [confirmPassword, setconfirmPassword] =useState("");
    const [frirstNameinPutError, setfrirstNameinPutError] =useState("")
    const [lastNameInPutError, setlastNameinPutError] =useState("")
    const [emailInPutError, setemailinPutError] =useState("")
    const [passwordInPutError, setpasswordinPutError] =useState("")
    const [passwordMatchError, setpasswordMatchError] =useState("")


    const validFirstName = (event) => {
            setfirstName(event.target.value);
            if (event.target.value.length < 2 && event.target.value.length >0) {
                setfrirstNameinPutError("that field must be at least 2 characters.");
            } else {
                setfrirstNameinPutError("");
            }
        }
    const validLasttName = (event) =>{
        if (event.target.id === "lastname"){
        setlastName(event.target.value);
            if (event.target.value.length < 2 && event.target.value.length >0) {
                setlastNameinPutError("that field must be at least 2 characters.");
            } else {
                setlastNameinPutError("");
        }
        }
    }
    const valid5Characters = (event) => {
        setemail(event.target.value);
        if (event.target.value.length < 5 && event.target.value.length >0) {
            setemailinPutError("that field must be at least 5 characters.");
        } else {
            setemailinPutError("");
        }
    }
    const valid8Characters = (event) => {
        setpassword(event.target.value);
        if (event.target.value.length < 8 && event.target.value.length >0) {
            setpasswordinPutError("that field must be at least 8 characters.");
        } else {
            setpasswordinPutError("");
        }
    }
    const validpassword = (event) => {
        setconfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setpasswordMatchError("password must match!");
        } else {
            setpasswordMatchError("");
        }
    }

  return (
    <div>
        <form action="">
            <div>
                <label htmlFor="firstname">FirstName</label>
                <input type="text" id="firstname" value={firstName} onChange={validFirstName}/>
                <p>First Name must be at least 2 characters</p>
                <span style={ {color: 'red'}}>{frirstNameinPutError}</span>
            </div>
            <div>
                <label htmlFor="lastname">LastName</label>
                <input type="text" id="lastname" value={lastName} onChange={validLasttName}/>
                <p>Last Name must be at least 2 characters</p>
                <span style={ {color: 'red'}}>{lastNameInPutError}</span>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={valid5Characters}/>
                <p>Email must be at least 5 characters</p>
                <span style={ {color: 'red'}}>{emailInPutError}</span>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={valid8Characters}/>
                <p>
                    Password must be at least 8 characters <br/> 
                    Password must match
                </p>
                <span style={ {color: 'red'}}>{passwordInPutError}</span>
            </div>
            <div>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" id="confirmpassword" value={confirmPassword} onChange={validpassword}/>
                <div>
                    <span style={ {color: 'red'}}>{passwordMatchError}</span>
                </div>
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