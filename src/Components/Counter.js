import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment } from '../Redux/Actions'

function Counter() {
    const count =useSelector((state)=>state.count);
    const dispatch=useDispatch();
  return (
    <div>
        <h1 style={{marginBottom:'20px',paddingBottom:'10px',backgroundColor:'rgb(3, 103, 161)'}}>Counter App Redux</h1>
        <button className='btn btn-primary' onClick={()=>dispatch(incriment())}>+</button>
        <span style={{margin:'20px',fontWeight:'bold'}}>{count}</span>
        <button  className='btn btn-primary' onClick={()=>dispatch(decriment())}>-</button>
    </div>
  )
}

export default Counter