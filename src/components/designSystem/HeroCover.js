import styled from "styled-components";
import Atoms from './Atoms'
const HeroCover = styled.div`
display: flex;
flex-direction: column;
width: 1024px;
margin: 0 auto;
height: 350px;
justify-content: center;
/* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    width: 198px;
    height: 280px;
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    width: 353px;
    height: 280px;
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    width: 403px;
    height: 280px;
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
    width: 744px;
    height: 280px;
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
    width: 1000px;
    height: 350px;
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    width: 1024px;
    height: 350px;
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    width: 1024px;
    height: 350px;
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    width: 1024px;
    height: 350px;
  }
`;
export default HeroCover;