import { FooterStyle } from "./styles";
import githubIcon from '../assets/githubBlack.svg'
import linkedinIcon from '../assets/linkedinBlack.svg'
import vercelIcon from '../assets/vercelBlack.svg'
import mailIcon from '../assets/emailBlack.svg'

export function Footer() {
  return (
    <FooterStyle>
      <div>
        <h2>Contact-me</h2>
        <div className="links">
          <a href="https://github.com/vsmargareth" target="_blank" ><img src={githubIcon} alt="" /></a>
          <a href="https://www.linkedin.com/in/vanessa-margareth/" target="_blank" ><img src={linkedinIcon} alt="" /></a>
          <a href="https://vercel.com/vsmargareth" target="_blank" ><img src={vercelIcon} alt="" /></a>
          <a href="" target="_blank" ><img src={mailIcon} alt="" /></a>
        </div>
      </div>

    </FooterStyle>


  )
}