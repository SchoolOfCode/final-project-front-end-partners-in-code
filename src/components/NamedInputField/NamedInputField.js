import React from 'react'
import InputField from "../InputField/InputField.js"

export default function NamedInputField({text}) {
  return (
    <div>
        <p>{text}</p>
        <InputField/>
    </div>
  )
}
