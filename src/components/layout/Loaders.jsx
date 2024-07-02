import { Backdrop } from '@mui/material'
import React, { Suspense } from 'react'

const LayoutLoader = () => {
  return (
    <>
   <Suspense fallback={<Backdrop open/>}>
    LOADING...
    </Suspense>
   
    </>
    
  )
}

export default LayoutLoader
