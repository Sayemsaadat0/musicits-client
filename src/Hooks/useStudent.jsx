import { useEffect, useState } from "react"

const useStudent=email=>{
    const [isStudent, setisStudent]=useState(false);
    const [isStudentLoader, setisStudentLoader]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`    https://musicits-server.vercel.app/users/student/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisStudent(data.isStudent)
                setisStudentLoader(false)
            })
        }
    },[email])
    return [isStudent, isStudentLoader]
}
export default useStudent; 

