import styled from "styled-components";

export const ModalStyled = styled.div`
  display: ${(props) => props.showmodal}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  main {
    position: relative;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 40px;
    border: 3px solid #888;
    width: 80%;
    margin: 10% auto;
  }

  span {
    border-radius: 50%;
    position: absolute;
    text-align: center;
    right: 20px;
    top: 20px;
    padding: 3px;
    width: 40px;
    aspect-ratio: 1/1;
    color: #aaa;
    background-color: #fff;

    font-size: 30px;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: #ccc;
      color: #fff;
      cursor: pointer;
    }
  }
`;
