import styled from "styled-components";


export const HeaderStyle = styled.header`
  background-color: #3F3D3D;
  color: #ffffff;
  width: 100%;
  max-width: 1440px;
  height: 100px;
  font-family: sans-serif;
  display:flex;

  .vanessa-logo{
    width:274px;
    height:52px;
  }

  .header-wrapper{
    display:flex;
    justify-content: space-between;
    width:100%;
    padding:26px;
  }
  .navbar ul{
    display:flex;
    gap: 26px;
  }

  li{
    list-style: none;
    display:flex;
    align-items: center;
    gap: 5px;
  }

`;