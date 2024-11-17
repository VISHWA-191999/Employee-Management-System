import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";


export const AuthContext =createContext();



const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
 
    useEffect(() => {
        // localStorage.clear()
        setLocalStorage()

        const {employeesData,adminData} = getLocalStorage();
        // console.log(employeesData);
        // console.log(adminData)
        setUserData({employeesData,adminData});
      
    },[])
  

   
    return (
        <div>
           
           <AuthContext.Provider value={userData}>
            {children}
           </AuthContext.Provider>

        </div>

    )
}

export default AuthProvider;