import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'96vh'}}>
        
 <InfinitySpin
  visible={true}
  width="200"
  color="red"
  ariaLabel="infinity-spin-loading"
  />
    </div>
  )
}

export default Loader