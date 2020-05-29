import styled from "styled-components"
import Atoms from "./Atoms"

const Link = styled.a`
  font-family: ${Atoms.Fonts.Mono};
  font-style: normal;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  font-size: ${props => props.size ? props.size + "px" : "20px"};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
  text-decoration: ${props => props.textDecoration ? props.textDecoration : "none"};
  cursor: pointer;
  color: var(--textNormal);
  &:hover {
    color: ${Atoms.Colors.active};
  }
  /* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    font-size: ${props => props.size ? (props.size)-2 + "px" : "18px"};
    margin-bottom: ${props =>
      props.marginBottom ? props.marginBottom : "2px"};
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    font-size: ${props => props.size ? (props.size)-2 + "px" : "18px"};
    margin-bottom: ${props =>
      props.marginBottom ? props.marginBottom : "2px"};
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    font-size: ${props => props.size ? (props.size)-2 + "px" : "18px"};
    margin-bottom: ${props =>
      props.marginBottom ? props.marginBottom : "2px"};
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
   font-size: ${props => props.size ? props.size + "px" : "20px"};
    margin-bottom: 0;
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
   font-size: ${props => props.size ? props.size + "px" : "20px"};
    margin-bottom: 0;
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    font-size: ${props => props.size ? props.size + "px" : "20px"};
    margin-bottom: 0;
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    font-size: ${props => props.size ? props.size + "px" : "20px"};
    margin-bottom: 0;
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    font-size: ${props => props.size ? props.size + "px" : "20px"};
    margin-bottom: 0;
  }
`
export default Link
