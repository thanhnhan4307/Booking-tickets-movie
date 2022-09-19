/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Profile.css"

export default function Profile(props) {
  return (
   <div className="h-screen bg-black flex flex-row flex-wrap p-3">
  <div className="mx-auto w-8/12 mt-36">
    <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")', backgroundRepeat: 'no-repat', backgroundSize: 'cover', backgroundBlendMode: 'multiply'}}>
      <div className="md:w-1/3 w-full">
        <img className="rounded-lg shadow-lg antialiased"src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />  
      </div>
      <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div className="text-2xl text-white leading-tight"></div>
          <div className="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div>
        </div>
      </div>
    </div>
    {/* End Profile Card */}
  </div>
</div>

 



  )
}
