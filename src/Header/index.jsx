import { HeaderStyle } from "./styles"
import nomeLogo from "../assets/vanessa-logo.svg"

export function Header() {
  return (
    <HeaderStyle>
      <div className="header">
        <img src={nomeLogo} alt="" />
        <nav className="navbar">
          <ul>
            <li><a href="" target="_blank" rel="noopener noreferrer"></a>Home</li>
            <li><a href="" target="_blank" rel="noopener noreferrer"></a>About</li>
            <li><a href="" target="_blank" rel="noopener noreferrer"></a>My Works</li>
            <li><a href="" target="_blank" rel="noopener noreferrer"></a>links</li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  )
}

