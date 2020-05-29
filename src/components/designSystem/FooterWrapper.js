import styled from "styled-components";
import Atoms from "./Atoms";

const FooterWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid;
  border-top-color: var(--textNormal);
  padding: 20px 0px;
  transition: color 0.2s ease-out, background 0.2s ease-out;
  margin-top: 80px;
  /* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    width: 198px;
    padding: 10px 0px;
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    width: 353px;
    padding: 10px 0px;
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    width: 403px;
    padding: 10px 0px;
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
    width: 744px;
    padding: 20px 0px;
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
    width: 1000px;
    padding: 20px 0px;
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    width: 1024px;
    padding: 20px 0px;
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    width: 1024px;
    padding: 20px 0px;
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    width: 1024px;
    padding: 20px 0px;
  }
`;
export default FooterWrapper;
