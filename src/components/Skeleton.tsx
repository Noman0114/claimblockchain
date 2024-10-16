import React from 'react'

export default function SkeletonLoading() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <p className="text-gray-400 mb-8">Fetching data, please wait</p>
      <img src='/Images/skeleton.png'/>
     
    </div>
  )
}