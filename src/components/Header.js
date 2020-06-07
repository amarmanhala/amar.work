import React from "react"
import Navigation from "./designSystem/Navigation"
import NavItems from "./designSystem/NavItems"
import StyledLink from "./designSystem/Link"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Header = () => {
  const globalLightDarkMode = {
    color: "var(--textNormal)",
    transition: "color 0.2s ease-out, background 0.2s ease-out",
  }
  return (
    <>
      <Navigation>
        <Link style={{ textDecoration: 'none' }} to="/">
          <StyledLink>Amarpreet Singh</StyledLink>
        </Link>
        <NavItems>
          <StyledLink href="#work" marginLeft="32px">
            Work
          </StyledLink>
          <StyledLink href="#about" marginLeft="32px">
            About
          </StyledLink>
          <StyledLink href="#contact" marginLeft="32px">
            Contact
          </StyledLink>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label style={{ marginLeft: "32px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                  style={{ position: "absolute", left: "-100vw" }}
                  for="light-dark-mode"
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g transform="matrix( 1 0 0 1 4 1 )">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3999 11C15.7999 10.1 16 9 16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 9.1 0.200098 10.1 0.600098 11L2.19995 15L13.8 15L15.3999 11ZM11 22L12.6001 18L3.3999 18L5 22L11 22Z"
                      fill="var(--textNormal)"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </label>
            )}
          </ThemeToggler>
        </NavItems>
      </Navigation>
    </>
  )
}
export default Header
