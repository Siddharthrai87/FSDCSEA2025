import React from 'react'
import Profile from './profile'

function Gallery(){
    return (
        <div style={{display:'flex',margin:20,gap:30}}>
            <h2>Profile Image</h2>
            <Profile/>
            <Profile/>
            <Profile/>
        </div>
    )
}

export default Gallery