import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.4s ease-in-out;
`;
export const Panel = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 440px;
  height: 100%;
  background: #111;
  z-index: 11;
  padding: 1rem 1.25rem;
  border-left: 1px solid #333;
  overflow-y: auto;
  transform: translateX(${(props) => (props.isOpen ? "0%" : "100%")});
  transition: transform 0.4s ease-in-out;

  @media (max-width: 480px) {
    width: 100vw;
    padding: 1rem;
    border-left: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

export const VariableCardContainer = styled.div`
  background: #0f0f0f;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-size: 1.2rem;
`;

export const Close = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;

export const SearchRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  background: #1a1a1a;
  border: 1px solid #3a3a3a;
  color: white;
`;

export const Autofill = styled.button`
  padding: 0.4rem 0.75rem;
  background: #1a1a1a;
  border: 1px solid #3a3a3a;
  color: white;
  border-radius: 8px;
`;

export const Rerun = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: auto;
  background: #1a1a1a;
  color: #a6ff03;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 0.4rem 0.75rem;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

export const Label = styled.div`
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.55rem;
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  gap: 1rem;
`;

export const Tag = styled.button`
  background: #1f1f1f;
  border: 1px solid #3a3a3a;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`;

export const HighlightTag = styled(Tag)`
  background: #2a2a00;
  border: 1px solid #a6ff03;
  color: #a6ff03;
`;

export const DescriptionBox = styled.div`
  background: #1a1a1a;
  color: #aaa;
  font-size: 0.75rem;
  padding: 0.75rem;
  opacity: 0;
  transform: translateY(6px);
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;


export const Expandable = styled.button`
  width: 100%;
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  color: #a6ff03;
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
  margin-top: 0.5rem;
  font-weight: 600;
`;

export const Divider = styled.div`
  border-top: 1px solid #333;
  margin: 1.5rem 0 1rem;
`;
export const CompactLimeIconButton = styled.button`
  border: 1px solid #a6ff03;
  color: #a6ff03;
  background: transparent;
  border-radius: 8px;
  padding: 4px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #1a1a1a;
  }
`;