import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'

export const Admin = () => {
  return (
    <Window>
      <Heading title="Admin Page" level={2} />
      <p>You must have been assigned an Admin role!</p>
      <Link to="/">Home</Link>
    </Window>
  )
}
