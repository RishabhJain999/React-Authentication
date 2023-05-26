import { TextInput } from './forms/TextInput';
import { Button } from './forms/Button';
import { Window } from './common/Window';
import { Heading } from './elements/Heading/Heading';
import { useState, useEffect, useRef } from 'react';
import { PWD_REGEX, USER_REGEX } from '../utils/Validations';

export const Register = () => {
  const elRef = useRef();
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [isValid, setIsValid] = useState({
    isValidName: false,
    isValidPswd: false,
    isValidMatch: false
  });
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    elRef.current && elRef.current.focus();
  }, []);

  useEffect(() => {
    const v = USER_REGEX.test(userDetails.username);
    setIsValid({ ...isValid, isValidName: v });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.username]);

  useEffect(() => {
    const v = PWD_REGEX.test(userDetails.password);
    const match =
      !!userDetails.password &&
      userDetails.password === userDetails.confirmPassword;
    setIsValid({ ...isValid, isValidPswd: v, isValidMatch: match });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.password]);

  useEffect(() => {
    const match =
      !!userDetails.password &&
      userDetails.password === userDetails.confirmPassword;
    setIsValid({ ...isValid, isValidMatch: match });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails.confirmPassword]);

  return (
    <div className='p-5'>
      <Window>
        <Heading
          className='text-black mb-5 text-center text-sm'
          level={5}
          title='Register'
        />
        <form>
          <div className='grid grid-cols-6 gap-5'>
            <TextInput
              ref={elRef}
              id='username'
              className='col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2'
              label='UserName'
              placeholder='John'
              required={true}
              autoComplete='off'
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
              id='password'
              type='password'
              className='col-span-6 sm:col-span-4  sm:col-start-2
              lg:col-start-3 lg:col-span-2'
              label='Password'
              required={true}
              autoComplete='off'
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
              id='confirmPassword'
              type='password'
              className='col-span-6 sm:col-span-4 sm:col-start-2
              lg:col-start-3 lg:col-span-2'
              label='Confirm Password'
              required={true}
              autoComplete='off'
              value={userDetails.confirmPassword}
              onChange={(e) => handleChange(e)}
              error={
                userDetails.confirmPassword && !isValid.isValidMatch
                  ? 'Must match the first password input field.'
                  : null
              }
            />
            <Button
              className='mt-2 max-w-xl col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2'
              variant='primary'
            >
              Sign In
            </Button>
          </div>
        </form>
      </Window>
    </div>
  );
};
