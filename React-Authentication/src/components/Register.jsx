import { TextInput } from './forms/TextInput';
import { Button } from './forms/Button';
import { Window } from './common/Window';
export const Register = () => {
  return (
    <div className='p-5'>
      <Window>
        <h1 className='text-white text-center mb-5'>Register</h1>
        <form>
          <div className='grid grid-cols-6 gap-5'>
            <TextInput
              id='username'
              className='col-span-6 sm:col-span-4 sm:col-start-2
              lg:col-start-3 lg:col-span-2'
              label='UserName'
              placeholder='John'
              required={true}
              autoComplete='off'
            />
            <TextInput
              id='password'
              type='password'
              className='col-span-6 sm:col-span-4  sm:col-start-2
              lg:col-start-3 lg:col-span-2'
              label='Password'
              required={true}
              autoComplete='off'
            />
            <TextInput
              id='confirm password'
              type='password'
              className='col-span-6 sm:col-span-4 sm:col-start-2
              lg:col-start-3 lg:col-span-2'
              label='Confirm Password'
              required={true}
              autoComplete='off'
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
