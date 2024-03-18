import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const err = useRouteError();
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>
        <h1>Oops! Something went wrong!</h1>
        <h3>Error Code: {err.status} - {err.statusText}</h3>
        <img style={{mixBlendMode:"multiply"}} src='https://t4.ftcdn.net/jpg/01/36/86/35/360_F_136863518_Mdp63C2wnPZn3p6X46fPX7xP2olNs2M4.jpg' alt='sad'/>
    </div>
  )
}
