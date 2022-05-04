import styled from "styled-components";
import back from "../../assets/Main/back.png";

export const StyledFooter = styled.section`
  margin-top: 150px;
  width: 100%;
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    126.56% 126.56% at 50% 126.56%,
    #0d4294 0%,
    #0b2038 86.03%
  );

  .wrapper {
    width: 100%;
    max-width: 1360px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 30px;
    .logoBlock {
      .link {
      }
    }
    .contactsBlock {
      display: flex;
      gap: 40px;
      a {
        width: 45px;
        height: 45px;
        img {
          width: 45px;
          height: 45px;
        }
      }
    }
    .navBlock {
      display: flex;
      gap: 77px;
      .link {
        text-decoration: none;
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 145%;
        /* identical to box height, or 32px */

        color: #ffffff;
      }
    }
    .OurContacts {
      display: flex;
      gap: 75px;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 145%;
      /* identical to box height, or 32px */

      text-align: center;

      color: #ffffff;
    }
    .rightsBlock {
      margin-top: 15px;
      p {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 9px;
        line-height: 12px;
        color: #ffffff;
      }
    }
  }
`;
