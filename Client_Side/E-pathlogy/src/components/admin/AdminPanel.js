import React from 'react'
import UserItem from './AdminUserItem.js'
import { useState,useEffect } from 'react';

function AdminPanel() {
    const [user, setUser] = useState([]);
    
    const getUser=async()=>{
        
        let baseUrl= "http://localhost:8080/api/user/alluser";

        const response = await fetch(baseUrl, {
            method: 'GET',
          });
          const json = await response.json();
          setUser(json);
          
    
    }

      useEffect(() => {
        
        getUser();

      },[])
      

  return (
    <div  style={{minHeight:"600px"}}>
    <div className="row p-3 my3">
      <h2 style={{color: '#CD5C5C'}}>List of available users in our Lab</h2>
      {user.map((user) => {
        return <UserItem key={user.userId} userItem={user} />;
      })}
      
    </div>
    </div>
  )
}

export default AdminPanel