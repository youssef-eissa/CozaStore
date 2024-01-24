import React from 'react';
import {  Badge } from 'antd';
import { Link } from 'react-router-dom';
type TBAdge = {
  icon: any
  to:string

}

function BadgeCon({icon,to}:TBAdge) {
  return (
    <Link to={to}>
      <Badge size='small' color='#717fe0' style={{ fontSize: 10 }} count={3}>
        {icon}
        
    </Badge>
  </Link>
  )
}

export default BadgeCon;