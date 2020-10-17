import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const StyledNavBar = styled(Nav)`
  z-index: 500;
  position: fixed;
  right: 0;
  height: ${({ theme }) => theme.metrics.headerHeight};
  width: 84vw;
  background: ${({ theme }) => theme.palette.topBarBgColor};
  flex-wrap: nowrap;

  #main-links {
    width: auto;
    flex-grow: 2;
    max-width: none;

    .nav {
      margin-top: 1.5rem;

      .nav-link {
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-size: 1rem;
        color: ${({ theme }) => theme.palette.primaryGreen};
        font-weight: bold;

        &:hover {
          color: ${({ theme }) => theme.palette.textColor};
          text-decoration: none;
        }
        &.active {
          color: ${({ theme }) => theme.palette.textColor};
        }
      }
    }
  }
`;
