import { Navigate } from "react-router-dom";
export function PrivateRoute({children}){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.role == "admin") return children;
    else{
        console.log(user);
        return <Navigate to="/"/>
    } 
}