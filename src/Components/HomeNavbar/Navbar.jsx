import React from 'react'
import MiddleNavbar from './MiddleNavbar'
import TopNavbar from './TopNavbar'

export default function Navbar({data , setData , handleSubmit}) {
  return (
    <div>
        <TopNavbar/>
        <MiddleNavbar data={data} setData={setData}  handleSubmit={handleSubmit} />
    </div>
  )
}
