import React, { useState } from "react";
import "./signup.css";
import data from "./data.json";


function Sign() {
    const [Data,setData]=useState({
        Email:"",
        Name:"",
        Password:"",
        ConfirmPassword:"",
        Bdate:"",

    });

    const [DataError,setDataError]=useState({
        EmailError:"",
        UserNameError:"",
        PasswordError:"",
        ConfirmPasswordError:"",
        BdateError:"",

    });


    // const [LoginData,setLoginData]=useState({
    //     LoginEmail:"",
    //     LoginPassword:"",
      
    // });

    // console.log("Login data ",  LoginData, typeof LoginData)
    // console.log("setLogin data ",  setLoginData, typeof setLoginData)


    // const [LoginDataError,setLoginDataError]=useState({
    //     LoginEmailError:"",
    //     LoginPasswordError:"",

    // });

    
    // const LoginphandelChange = (event) => {
    //     //   Event data
    //      if (event.target.name == "loginEmail") {
    //        //state->email
    //        setLoginData({ ...LoginData, LoginEmail: event.target.value });
    //        setLoginDataError({
    //          ...LoginDataError,
    //          LoginEmailError:
    //            event.target.value.length == ""
    //              ? "Required"
    //              : event.target.value.includes("@")
    //              ? ""
    //              : "Please Enter an Email that contain '@' !",
    //        });
    //      } else if (event.target.name == "loginPassword") {
    //        //state->password
    //        setData({ ...LoginData, LoginPassword: event.target.value });
    //        setDataError({
    //          ...LoginDataError,
    //          LoginPasswordError:
    //            event.target.value.length == ""
    //              ? "Required"
    //              : event.target.value.length < 8
    //              ? "Password at least 8 characters"
    //              : !containsUppercase(event.target.value)
    //              ?"Inculude an Atleast One UpperCase Letter"
    //              :containsSpecialChars(event.target.value)
    //              ?""
    //              : "Include a Special Charcter in the Password",
    //        });
    //     }

    // }

    function containsUppercase(str) {
      return /[A-Z]/.test(str);
    }

    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }

    const SinguphandelChange = (event) => {
       //   Event data
        if (event.target.name == "Email") {
          //state->email
          setData({ ...Data, Email: event.target.value });
          setDataError({
            ...DataError,
            EmailError:
              event.target.value.length == ""
                ? "Required"
                : event.target.value.includes("@")
                ? ""
                : "Please Enter an Email that contain '@' !",
          });
        } else if (event.target.name == "Password") {
          //state->password
          setData({ ...Data, Password: event.target.value });
          setDataError({
            ...DataError,
            PasswordError:
              event.target.value.length == ""
                ? "Required"
                : event.target.value.length < 8
                ? "Password at least 8 characters"
                : !containsUppercase(event.target.value)
                ?"Inculude an Atleast One UpperCase Letter"
                :containsSpecialChars(event.target.value)
                ?""
                : "Include a Special Charcter in the Password",
          });
        }
        else if (event.target.name == "ConfirmPassword") {
            //state->Confirm password
            setData({ ...Data, ConfirmPassword: event.target.value });
            setDataError({
              ...DataError,
              ConfirmPasswordError:
                event.target.value.length == ""
                  ? "Required"
                  : event.target.value == Data.Password
                  ? ""
                  : "Passwords Doesn't Match",
            });
          }
          else if (event.target.name == "FullName") {
            //state->Name
            setData({ ...Data, Name: event.target.value });
            setDataError({
              ...DataError,
              NameError:
                event.target.value.length == ""
                  ? "Required"
                  : ""
            });
          }
          else if (event.target.name == "Bdate") {
            //state->Bdate
            setData({ ...Data, Bdate: event.target.value });
            setDataError({
              ...DataError,
              BdateError:
                event.target.value.length == ""
                  ? "Required"
                  :""
            });
          }
    
    }

   
    function Signup(){
        // FullData.push(Data);
        // console.log(Data);
        // alert("Your Email : "+Data.Email);
        // const data = fs.readFileSync('data.json');
        // const jsonData = JSON.parse(data);

        data.users.push({
          email: Data.Email,
          password:Data.Password,
          ConfirmPassword:Data.ConfirmPassword,
          Name:Data.Name,
          Bdate:Data.Bdate

        });
       
        document.cookie=`${Data.Email}-${Data.Password}-`;


      //  console.log(data.users,data.users.length,document.cookie);
      //   alert("In Singup");
    }

    function Login(){
        var em = document.getElementById("LoginEmail").value;
        var pass=document.getElementById("LoginPassword").value;
        
     var cookie=document.cookie;
        let cookies = cookie.split('-');
         let ret = [];
     
    for (let i = 1; i <= cookies.length; i++) {
        ret.push(cookies[i - 1]);
    }
        
     

        var bool =false;
        
      
console.log(ret[0]);

        for(var i=0;i<data.users.length;i++){
            if(em==data.users[i].email && pass==data.users[i].password){
                // console.log("Login Succesfully");
                bool=true;
                break;   
            }
        }
        for(var i=0;i<ret.length;i=i+2){
          if(em==ret[0] && pass==ret[1]){
              // console.log("Login Succesfully");
              bool=true;
              break;   
          }
      }
        if(bool==true){
          // document.cookie=`Email=${em};`;
          // document.cookie=`Password=${pass};expires=25/11/2024`;
          // console.log(document.cookie);
          alert("Login Sucessfuly");

        }
        else{
          alert("Login Faild");
        }




    }


    



    return ( 
    <>

<form action="" className="form spaceform">

    <input id="noaccount" name="radioaccount" type="radio" className="radio radio--invisible" checked />
    <input id="account" name="radioaccount" type="radio" className="radio radio--invisible"/>
    <div className="form_background">
      <div className="form-group form-group--account">
        <h3 className="form-group_title">Log in</h3>
        <input className="form-group_input" type="email" placeholder="Email" Name="loginEmail" id="LoginEmail" />
        <input className="form-group_input" type="password" placeholder="Password" Name="loginPassword" id="LoginPassword" />
        <button className="button button--form" onClick={Login}>Log in</button>
      </div>
      <div className="form-group form-group--noaccount">
        <h3 className="form-group_title">Sign up</h3>
        <input className="form-group_input" type="text" placeholder="Full Name" name="FullName" onChange={(e) => SinguphandelChange(e)}/>
        <p style={{color:"red"}}>
          {DataError.NameError}
        </p>
        <input className="form-group_input" type="email" placeholder="Email" name="Email" onChange={(e) => SinguphandelChange(e)}/>
        <p style={{color:"red"}}>
          {DataError.EmailError}
        </p>
        <input className="form-group_input" type="password" placeholder="Password" name="Password" onChange={(e) => SinguphandelChange(e)}/>
        <p style={{color:"red"}}>
          {DataError.PasswordError}
        </p>
        <input className="form-group_input" type="password" placeholder="Confirm Password" name="ConfirmPassword" onChange={(e) => SinguphandelChange(e)}/>
        <p style={{color:"red"}}>
          {DataError.ConfirmPasswordError}
        </p>
        <input className="form-group_input" type="date" name="Bdate" onChange={(e) => SinguphandelChange(e)}/>
        <p style={{color:"red"}}>
          {DataError.BdateError}
        </p>
        <button className="button button--form" disabled={
                DataError.EmailError || DataError.PasswordError || DataError.ConfirmPasswordError || DataError.NameError || DataError.BdateError
                  ? true
                  : false
              }  onClick={Signup}>Sign up</button>
      </div>
    </div>
    

  <fieldset className="fieldset">
    <h2>Don't have an account ?</h2>
    <p>We are delighted to have you in the World Wide Home Of Movies you are one step away! </p>
    <div className="form_content form_content--noaccount">
      
    </div>
    <label for="noaccount" className="button">Signup</label>
  </fieldset>
  <fieldset className="fieldset">
    <h2>Have an account ?</h2>
    <p>Welcome Back Pal!</p>
    
    <div className="form_content form_content--noaccount">
      
    </div>
    <label for="account" className="button">login</label>
  </fieldset>
</form>
    
    
    
    
    </> );
}

export default Sign;