import React from 'react'
import Collapsible from 'react-collapsible'
import './Accordion.css'

const Accordion = () => {
  return (
    <>
      <Collapsible trigger="What is Lorem?" triggerStyle={{fontSize:"2rem", fontWeight:"bolder"}}>
        <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem est accusantium quam nihil qui ullam provident esse eius molestias optio laboriosam harum voluptatibus consectetur odio hic adipisci excepturi, laudantium ut corrupti, fugit doloribus voluptates quis voluptate! Recusandae ex doloribus quidem id odit voluptate tenetur quo, ab autem sint modi iste.
        </div>
      </Collapsible>
    </>
  )
}

export default Accordion
