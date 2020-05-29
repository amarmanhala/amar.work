import styled from "styled-components"
import Atoms from "./Atoms"

const P = styled.p`
  font-family: ${Atoms.Fonts.Mono};
  font-style: normal;
  font-weight: normal;
  font-size: ${props => (props.size ? props.size : "20px")};
  margin-top: 8px;
  color: var(--textNormal);
  line-height: 1.425;
  /* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    font-size: 18px;
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    font-size: 18px;
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    font-size: 18px;
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
    font-size: ${props => (props.size ? props.size : "20px")};
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
    font-size: ${props => (props.size ? props.size : "20px")};
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    font-size: ${props => (props.size ? props.size : "20px")};
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    font-size: ${props => (props.size ? props.size : "20px")};
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    font-size: ${props => (props.size ? props.size : "20px")};
  }
`
export default P
