import styled from "styled-components";

export const WorksStyle = styled.div`
  font-family: 'Share Tech Mono';
  margin-left: 40px;
  width:100%;

  .worksTitle{
    display: flex;
    padding: 10px;
    gap: 15px;
    font-size: 40px;
  }

  .worksTitle img{
    width: 50px;
  }

  .cardsWrapper{
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-row-gap: 34px;
  }

  .card img{
    max-width: 355px;
    height:397px;
    border: 1px solid #BCBCBC;
    box-shadow: 8px 8px 17px -1px rgba(0, 0, 0, 0.63);
    border-radius: 14px;
  }
`