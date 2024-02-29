import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loader1() {
  return (
    <div className='loader_1'>
        <Oval
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  )
}
