import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useInstractor = (email) => {
    const [isInstructor, setisInstructor]=useState(false);
    const [isInstructorLoader, setisInstructorLoader]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://musicits-server.vercel.app/users/instructor/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setisInstructor(data.isInstructor)
                setisInstructorLoader(false)
            })
        }
    },[email])
    return [isInstructor, isInstructorLoader]
};

export default useInstractor;