import { TextInput } from './forms/TextInput'
import { Button } from './forms/Button'
import { Window } from './common/Window'
import { Heading } from './elements/Heading/Heading'
import { useState, useEffect, useRef } from 'react'
import { PWD_REGEX, USER_REGEX } from '../utils/Validations'
// import { Modal } from './Modal'
import axios from '../api/axios'
// import { redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

// import { newUser } from '../utils/actions'

export const Register = () => {
  const elRef = useRef()
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [isValid, setIsValid] = useState({
    isValidName: false,
    isValidPswd: false,
    isValidMatch: false
  })
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    elRef.current && elRef.current.focus()
  }, [])

  useEffect(() => {
    const v = USER_REGEX.test(userDetails.username)
    setIsValid({ ...isValid, isValidName: v })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.username])

  useEffect(() => {
    const v = PWD_REGEX.test(userDetails.password)
    const match =
      !!userDetails.password &&
      userDetails.password === userDetails.confirmPassword
    setIsValid({ ...isValid, isValidPswd: v, isValidMatch: match })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.password])

  const fn = () => ({
    username: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    const match =
      !!userDetails.password &&
      userDetails.password === userDetails.confirmPassword
    setIsValid({ ...isValid, isValidMatch: match })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.confirmPassword])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // user creation api
    try {
      await axios.post(
        '/users',
        {
          username: userDetails.username,
          password: userDetails.password,
          id: uuidv4()
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      setUserDetails({ ...userDetails, ...fn() })
      error && setError('')
      setStatus('User successfully register!')
      setTimeout(() => {
        setStatus('')
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <div className="p-5 relative">
      <Window>
        {error && (
          <h5 className="bg-red-600 p-5 text-center mb-3 text-red-200">
            {error}
          </h5>
        )}
        {!error && status && (
          <h5 className="bg-green-600 p-5 text-center mb-3 text-green-200">
            {status}
          </h5>
        )}
        <Heading
          className="text-black mb-5 text-center "
          level={1}
          title="Register"
        />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-5">
            <TextInput
              ref={elRef}
              id="username"
              className="col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
              label="UserName"
              placeholder="John"
              required={true}
              autoComplete="off"
              value={userDetails.username}
              onChange={(e) => handleChange(e)}
              error={
                userDetails.username && !isValid.isValidName ? (
                  <>
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </>
                ) : null
              }
            />
            <TextInput
              id="password"
              type="password"
              className="col-span-6 sm:col-span-4  sm:col-start-2
              lg:col-start-3 lg:col-span-2"
              label="Password"
              required={true}
              autoComplete="off"
              value={userDetails.password}
              onChange={(e) => handleChange(e)}
              error={
                userDetails.password && !isValid.isValidPswd ? (
                  <>
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                  </>
                ) : null
              }
            />

            <TextInput
              id="confirmPassword"
              type="password"
              className="col-span-6 sm:col-span-4 sm:col-start-2
              lg:col-start-3 lg:col-span-2"
              label="Confirm Password"
              required={true}
              autoComplete="off"
              value={userDetails.confirmPassword}
              onChange={(e) => handleChange(e)}
              error={
                userDetails.confirmPassword && !isValid.isValidMatch
                  ? 'Must match the first password input field.'
                  : null
              }
            />
            <Button
              type="submit"
              className="mt-2 max-w-xl col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
              variant="primary"
              disabled={
                !userDetails.username ||
                !userDetails.password ||
                !userDetails.confirmPassword ||
                !isValid.isValidMatch ||
                !isValid.isValidName ||
                !isValid.isValidPswd
              }
            >
              Register
            </Button>
          </div>
        </form>
      </Window>
      {/* {status ? (
        <Modal setStatus={setStatus} status={status}>
          <div>
            <p className="text-center">{status}</p>
            <Button
              variant="secondary"
              className="mt-5"
              onClick={() => setStatus('')}
            >
              Close
            </Button>
          </div>
        </Modal>
      ) : null} */}
    </div>
  )
}
