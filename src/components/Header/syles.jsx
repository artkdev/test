import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 37px 50px 0px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;

  .wrapper {
    width: 100%;
    height: fit-content;
    max-width: 1360px;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    padding-bottom: 25px;
    .navBlock {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 77px;
      .link {
        text-decoration: none;

        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 145%;
        /* or 23px */

        color: #ffffff;
      }
    }
    .langBlock {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      button {
        background: none;
        border: none;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 145%;
        color: #ffffff;
      }
    }
    .contactsBlock {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 30px;
      a {
        img {
          width: 37px;
          height: 36px;
        }
      }
    }
  }
`;
