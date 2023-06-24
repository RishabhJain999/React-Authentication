import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'

export const Lounge = () => {
  return (
    <Window>
      <Heading title="Lounge Page" level={2} />
      <p>Admins and Editors can hang out!</p>
      <Link to="/">Home</Link>
    </Window>
  )
}
