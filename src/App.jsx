import React, { useContext, useEffect, useState } from "react";
import Login from  "./components/Auth/Login";
import './index.css';
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  // localStorage.clear();
  const [user , setUser] =useState(null);
  console.log(user);

  const [loggedInUserData, setLoggedInUserData] =useState(null);
  console.log(loggedInUserData)

  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData) {
      
      const loggedInUser = localStorage.getItem('loggedInUser');
      
      // if(!loggedInUser) {
      //   setUser == null;
      // }
      if (loggedInUser) {
        const userPage = JSON.parse(loggedInUser)
     
      if(userPage.role=='employee') {
        console.log("insode employee")
        
        setUser(userPage.role); //  employee
        setLoggedInUserData(userPage.employeeData)
      }
      if(userPage.role=='admin') {
        console.log("insode admin")
       
         
          setUser(userPage.role); // admin 
          setLoggedInUserData(userPage.adminData)
        
      }

    }
  }
  },[authData])

  console.log(user);

  const handleLogin = (email , password) => {


    if(authData) {
      console.log("inside login")
      // console.log(authData)
      // console.log(authData.adminData[0].email);
      if (email == authData.adminData[0].email && password == authData.adminData[0].pass ) {
        setUser("admin")
        const adminData = authData.adminData[0]
        setLoggedInUserData(adminData)
        
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin',adminData:adminData}));
  
      }
      else if (authData ) {
          const employee=authData.employeesData.find((e)=> e.email==email && e.pass==password)
         
  
          if(employee) {
            setUser("employee")
          
            setLoggedInUserData(employee);
            localStorage.setItem('loggedInUser',JSON.stringify( {role: "employee" , employeeData:employee} ));
  
          }
         
          
  
      }

    }

    
    else  {
      alert("invalid credentials")
    }

   

  }

 
  

 
  return(
    <>

   {/* Show the login page if the user is not logged in */}
   {!user && <Login handleLogin={handleLogin} />}

{/* Show Admin Dashboard if user is an admin */}
{user === "admin" && <AdminDashboard adminData={loggedInUserData} />}

{/* Show Employee Dashboard if user is an employee */}
{user === "employee" && <EmployeeDashboard data={loggedInUserData}/>}
   
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
 
   </>
  )
};

export default App;
