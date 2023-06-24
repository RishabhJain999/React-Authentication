import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'

export const Unauthorised = () => {
  return (
    <Window>
      <Heading title="Unauthorised" level={2} />
      <p>You do not have access to this page!</p>
      <Link to="/">Home</Link>
    </Window>
  )
}
