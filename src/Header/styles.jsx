import styled from "styled-components";
import StyledComponent from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #3F3D3D;
  color: #ffffff;
  width: 100%;
  max-width: 1440px;
  height: 100px;
  font-family: sans-serif;
  display:flex;


  .header{
    display:flex;
    justify-content: space-between;
  }
  .navbar ul{
    display:flex;
    gap: 26px;
  }

  li{
    list-style: none;
  }
`;