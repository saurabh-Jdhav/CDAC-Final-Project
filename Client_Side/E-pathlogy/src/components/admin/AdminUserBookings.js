import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import AdminBookingItem from './AdminBookingItem.js'

function AdminUserBookings() {
  
  const location = useLocation();
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const id = location.state.id
    getBookings(id);
  }, [])
  

  const getBookings=async(id)=>{
    
    let baseUrl= `http://localhost:8080/api/b1/listofbookedusers/${id}`;

    const response = await fetch(baseUrl, {
        method: 'GET',
      });
      const json = await response.json();
      setBookings(json);
  }

  return (
    <div className='d-flex justify-content-center' style={{minHeight:"675px"}}>
    <div className='container row d-flex justify-content-center'>
    {bookings.map((booking) => {
        return <AdminBookingItem key={booking.patient.patientId} booking={booking} />;
      })}
                  
      </div>
      </div>
    
  )
}

export default AdminUserBookings