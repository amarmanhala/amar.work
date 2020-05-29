import styled from "styled-components"
import Atoms from "./Atoms"

const SectionHeaderWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  padding-bottom: 40px;
  /* Media Queries */
  /*  Breakpoints for Mobile - 320 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileS}) {
    width: 198px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  /*  Breakpoints for Mobile - 375 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileM}) {
    width: 353px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  /*  Breakpoints for Mobile - 425 */
  @media screen and (min-width: ${Atoms.Breakpoint.mobileL}) {
    width: 403px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  /*  Breakpoints for Tablet - 768 */
  @media screen and (min-width: ${Atoms.Breakpoint.tablet}) {
    width: 744px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
  /*  Breakpoints for laptop - 1024 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptop}) {
    width: 1000px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
  /*  Breakpoints for laptop - 1280 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopM}) {
    width: 1024px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
  /*  Breakpoints for laptop - 1440 */
  @media screen and (min-width: ${Atoms.Breakpoint.laptopL}) {
    width: 1024px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
  /*  Breakpoints for Desktop - 2560 */
  @media screen and (min-width: ${Atoms.Breakpoint.desktop}) {
    width: 1024px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
`
export default SectionHeaderWrapper
