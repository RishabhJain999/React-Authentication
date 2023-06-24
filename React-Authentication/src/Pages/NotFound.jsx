import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'

export const NotFound = () => {
  return (
    <Window>
      <Heading title="404- Not Found" level={2} />
      <p>
        Go To <Link to="/">Home</Link>
      </p>
    </Window>
  )
}
