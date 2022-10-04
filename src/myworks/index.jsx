import { WorksStyle } from "./styles";
import myWorksBlack from "../assets/myworksBlack.svg"
import parnaibaphoto from "../assets/parnaiba.png"
import homeflix from "../assets/homeflix.png"
import forms from "../assets/form.png"
import comingSoon from "../assets/embreve.png"

export function Myworks() {
  return (
    <WorksStyle>
      <div className="worksTitle">
        <img src={myWorksBlack} alt="" />
        <h2>My Works </h2>
      </div>
      <div className="cardsWrapper">
        <div className="card">
          <img src={parnaibaphoto} alt="" />
        </div>
        <div className="card">
          <img src={homeflix} alt="" />
        </div>
        <div className="card">
          <img src={forms} alt="" />
        </div>
        <div className="card">
          <img src={comingSoon} alt="" />
        </div>
        <div className="card">
          <img src={comingSoon} alt="" />
        </div>
        <div className="card">
          <img src={comingSoon} alt="" />
        </div>
      </div>


    </WorksStyle>
  )
}