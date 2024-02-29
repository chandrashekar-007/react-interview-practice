import React from 'react'
import { Oval } from 'react-loader-spinner'
import { ClipLoader } from 'react-spinners'

export default function Loader() {
  return (
    <ClipLoader color="#e2ded9" size={25} />
    // <Oval
    // visible={true}
    // height="25"
    // width="30"
    // color="#4fa94d"
    // ariaLabel="oval-loading"
    // wrapperStyle={{}}
    // wrapperClass=""
    // />
  )
}
