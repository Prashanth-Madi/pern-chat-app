import React, {  createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

type AuthUserType={
    id:string,
    fullName:string,
    email:string,
    profilePic:string,
    gender:string
}
// type ContextProps={
//         authUser:AuthUserType|null;
//         setAuthUser:Dispatch<SetStateAction<AuthUserType|null>>;
//         isLoading:boolean;
// }
type UserContextProviderProps={
    children:React.ReactNode;
}
export const AuthContext=createContext<{
    authUser:AuthUserType|null,
    setAuthUser:Dispatch<SetStateAction<AuthUserType|null>>,
    isLoading:boolean,
}|null>({
        authUser:null,
        setAuthUser:()=>{},
        isLoading:true,
            }) 
export const useAuthContext=()=>{
    const context= useContext(AuthContext);
    if(!context){
        throw new Error("useAuthContext is not available")
    }
    return context;
}
export const AuthContextProvider=({children}:UserContextProviderProps)=>{
    const [authUser,setAuthUser]=useState<AuthUserType|null>(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const fetchAuthUser=async()=>{
            try{
                const res=await fetch("/api/auth/me");
                const data=await res.json();
                if(!res.ok){
                    throw new Error(data.error)
                }
                // console.log(data)
                 setAuthUser(data)
            }
            catch(error:any){
                console.log(error);
                toast.error(error.message);
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchAuthUser();
    },[])
    return(
        <AuthContext.Provider
        value={{
            authUser,
            isLoading,
            setAuthUser
        }}>{children}</AuthContext.Provider>
    )

}