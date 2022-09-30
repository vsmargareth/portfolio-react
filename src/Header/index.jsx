import { HeaderStyle } from "./styles"
import nomeLogo from "../assets/vanessa-logo.svg"
import homeIcon from "../assets/home.svg"
import aboutIcon from "../assets/about.svg"
import myWorksIcon from "../assets/myWorks.svg"
import linksIcon from "../assets/links.svg"

export function Header() {
  return (
    <HeaderStyle>
      <div className="header-wrapper">
        <img src={nomeLogo} className="vanessa-logo" alt="" />
        <nav className="navbar">
          <ul>
            <li><img src={homeIcon} alt="" /><a href="" target="_blank" rel="noopener noreferrer"></a>Home</li>
            <li><img src={aboutIcon} alt="" /><a href="" target="_blank" rel="noopener noreferrer"></a>About</li>
            <li><img src={myWorksIcon} alt="" /><a href="" target="_blank" rel="noopener noreferrer"></a>My Works</li>
            <li><img src={linksIcon} alt="" /><a href="" target="_blank" rel="noopener noreferrer"></a>links</li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  )
}

