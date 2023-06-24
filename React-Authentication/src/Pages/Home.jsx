import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'
import { Button } from '../components/forms/Button'
import { useAuth } from '../context/Auth'

export const Home = () => {
  const { setAuth, auth } = useAuth()
  return (
    <Window className="text-center">
      <Heading title="Home" level={2} />
      <p className="mt-5">
        You are <span>{!auth && 'not'}</span> logged in
      </p>
      <div>
        <Link to="/editor"> Go to the Editor Page</Link>
        <Link to="/admin">Go to the Admin Page</Link>
        <Link to="/lounge">Go to the Lounge</Link>
        <Link to="/links">Go to the Links Page</Link>
      </div>
      <Button
        type="submit"
        disabled={!auth}
        onClick={() => setAuth(null)}
        className="mt-2 max-w-xl col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
        variant="primary"
      >
        Sign out
      </Button>
      <Link to="/login">
        <Button
          disabled={auth}
          type="submit"
          className="mt-2 max-w-xl col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
          variant="primary"
        >
          Sign In
        </Button>
      </Link>
    </Window>
  )
}
