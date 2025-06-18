import styled from "styled-components";


export const SidebarContainer = styled.div<{ expanded: boolean }>`
  background-color: #0f0f0f;
  width: ${({ expanded }) => (expanded ? "300px" : "85px")};
  height: 100vh;
  color: white;
  transition: all 0.4s ease;
  border-right: 1px solid #2e2e2e;
  position: relative;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 20;
    left: ${({ expanded }) => (expanded ? "0" : "-300px")};
    width: 300px;
    height: 100vh;
    top: 0;
    background-color: #0f0f0f;
    box-shadow: ${({ expanded }) =>
      expanded ? "2px 0 10px rgba(0, 0, 0, 0.5)" : "none"};
  }
`;
// ⬅ add this right next to your other styled-components imports
export const MobileHamburger = styled.div`
  display: block;          /* show on phones            */
  margin-right: auto;      /* keeps tabs centred        */

  /* hide when viewport ≥ 768 px (md and up) */
  @media (min-width: 768px) {
    display: none;
  }
`;


export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0.5rem 0;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
`;

export const MenuItem = styled.a<{ expanded: boolean }>`
  display: flex;
  align-items: center;
  height: 57px;
  margin: ${({ expanded }) => (expanded ? "0 20px" : "0 auto")};
  padding: 0 1rem;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  text-transform: uppercase;
  gap: 0.75rem;
  transition: background 0.3s;

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const FooterSection = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
`;

export const TopHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 80px;
  border-bottom: 1px solid #2e2e2e;
  background: #0f0f0f;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

export const TopTabs = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Tab = styled.div`
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1f1f1f;
  }
`;

export const ActiveTab = styled(Tab)`
  background-color: #1a1a1a;
  border: 1px solid #3a3a3a;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 250px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  background-color: #1a1a1a;
  border: 1px solid #3a3a3a;
  color: white;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  width: 100%;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentArea = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: #0f0f0f;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const TopHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1.5rem;
  border-bottom: 1px solid #2e2e2e;
  background: #0f0f0f;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
    gap: 0.5rem;
  }
`;
