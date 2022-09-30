import { AboutStyle } from './styles'
import aboutIcon from '../assets/aboutBlack.svg'
import vanessaPerfil from '../assets/vanessaProfile.svg'

export function About() {
  return (
    <AboutStyle>
      <div className='title'>
        <img src={aboutIcon} alt="" />
        <h2> About</h2>
      </div>
      <div className='aboutMain'>
        <img src={vanessaPerfil} alt="" />
        <div>
          <h3>Skills</h3>
          <p>Frontend Developer</p>
          <h3>Tools</h3>
          <p>HTML, CSS, SASS, JavaScript- jquery, bootstrap</p>
        </div>
      </div>


    </AboutStyle>
  )
}