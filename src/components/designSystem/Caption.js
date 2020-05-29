import styled from "styled-components";
import Atoms from './Atoms'
const P = styled.p`
font-family: ${ Atoms.Fonts.Mono };
font-style: normal;
font-weight: normal;
font-size: ${props => props.size ? props.size : "16px"};
margin-top: 8px;

/* identical to box height */


color: var(--textNormal);
/* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    font-size: 14px;
    
    
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    font-size: 14px;
    
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    font-size: 14px;
    
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
   font-size: ${props => props.size ? props.size : "16px"};
    
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
   font-size: ${props => props.size ? props.size : "16px"};
    
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
   font-size: ${props => props.size ? props.size : "16px"};
    
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
   font-size: ${props => props.size ? props.size : "16px"};
    
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
   font-size: ${props => props.size ? props.size : "16px"};
    
  }
`;
export default P;