import React from 'react';
import {  Badge } from 'antd';
type TBAdge = {
  icon: any
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  CartsLength:number
}

function BadgeCon({icon,open,setOpen,CartsLength}:TBAdge) {
  return (
    <div style={{ cursor: 'pointer' }} className='ms-3' onClick={() => setOpen(!open)} >
      <Badge  size='small' color='#717fe0' style={{ fontSize: 10 }} count={CartsLength}>
        {icon}
        
    </Badge>
  </div>
  )
}

export default BadgeCon;