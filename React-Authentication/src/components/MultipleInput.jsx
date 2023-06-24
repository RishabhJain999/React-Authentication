import { useState } from 'react'
import { TextInput } from './forms/TextInput'

export const MultipleInput = ({ inputs, setInputs }) => {
  const [value, setValue] = useState('user')
  const handleMultipleInputs = (e) => {
    setValue(e.target.value)
  }

  const handleEnterKey = (e) => {
    if (e.charCode === 13) {
      let fakeValue = [value]
      setInputs([...inputs, ...fakeValue])
      setValue('')
    }
  }

  const handleDelete = (index) => {
    const filteredInputs = inputs.filter((_, i) => {
      return index !== i
    })
    setInputs(filteredInputs)
  }
  return (
    <>
      <TextInput
        id="roles"
        className="col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
        label="roles"
        placeholder="admin-editor-user"
        autoComplete="off"
        onChange={(e) => handleMultipleInputs(e)}
        value={value}
        onKeyPress={(e) => handleEnterKey(e)}
      />
      <div>
        {inputs.map((input, index) => {
          return (
            <div className="absolute" key={index}>
              <span>{input}</span>
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(index)}
              >
                ❌
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}
