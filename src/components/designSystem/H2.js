import styled from "styled-components"
import Atoms from "./Atoms"
const H2 = styled.h2`
  font-family: ${Atoms.Fonts.Mono};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 42px;
  margin: 0;
  color: var(--textNormal);
  /* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    font-size: 22px;
    line-height: 34px;
    letter-spacing: -1px;
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    font-size: 22px;
    line-height: 34px;
    letter-spacing: -1px;
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    font-size: 22px;
    line-height: 34px;
    letter-spacing: -1px;
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
    font-size: 30px;
    line-height: 42px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
    font-size: 30px;
    line-height: 42px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    font-size: 30px;
    line-height: 42px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    font-size: 30px;
    line-height: 42px;
    letter-spacing: inherit;
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    font-size: 30px;
    line-height: 42px;
    letter-spacing: inherit;
  }
`
export default H2
