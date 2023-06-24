import { Link } from 'react-router-dom'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'

export const Editor = () => {
  return (
    <Window>
      <Heading title="Editor Page" level={2} />
      <p>You must have been assigned an Editor role!</p>
      <Link to="/">Home</Link>
    </Window>
  )
}
