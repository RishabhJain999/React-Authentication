import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'

export const AllLinks = () => {
  return (
    <Window className="text-center">
      <Heading title="AllLinks" level={2} />
      <div className="mt-5">
        <Heading className="text-black" title="Public" level={3} />
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <div className="mt-5">
        <Heading title="Private" level={3} />
        <Link to="/lounge">Lounge</Link>
        <Link to="/editor">Editor Page</Link>
        <Link to="/Admin">Admin Page</Link>
      </div>
    </Window>
  )
}
