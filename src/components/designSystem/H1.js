import styled from "styled-components"
import Atoms from "./Atoms"
const H1 = styled.h1`
  font-family: ${Atoms.Fonts.Mono};
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  margin: 0px;
  color: var(--textNormal);
  /* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    font-size: 34px;
    line-height: 45px;
    letter-spacing: -1px;
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    font-size: 34px;
    line-height: 45px;
    letter-spacing: -1px;
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    font-size: 34px;
    line-height: 45px;
    letter-spacing: -1px;
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: inherit;
  }
`
export default H1
