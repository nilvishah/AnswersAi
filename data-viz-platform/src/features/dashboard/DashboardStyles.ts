import styled from "styled-components";
import { ChevronDown } from "lucide-react";
export const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  background: transparent;
  color: #ffffff;

  &:hover {
    background: #1f1f1f;
  }
`;
export const PillButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #3a3a3a;
  font-size: 0.95rem;
  font-weight: 600;
  background: ${({ active }) => (active ? "#1a1a1a" : "transparent")};
  color: #ffffff;

  &:hover {
    background: #1f1f1f;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 1.5rem;
  background: #0f0f0f;
  border-bottom: 1px solid #2e2e2e;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
  }
`;

/* ---------- Best Scenario Results ---------- */

export const ScenarioRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
  padding: 0 1.5rem;
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-top: 5rem;
  }
`;

export const ScenarioLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #a6ff03;
  font-size: 1.05rem;
`;

export const LimeIconButton = styled(IconButton)`
  border-color: #a6ff03;
  color: #a6ff03;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 0 1.5rem;
  width: 97%;
`;

export const InfoBox = styled.div`
  border: 1px solid #a6ff03;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #a6ff03;
  background: #101010;
  text-align: left;
`;

/* ---------- Combined Graph + KPI Section ---------- */

export const MainContent = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 1.5rem;
  margin-top: 2rem;
   @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

/* ---------- Graph ---------- */

export const GraphSection = styled.section`
  width: 60%;
   @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GraphCard = styled.div`
  background: #1a1a1a;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 0rem;
`;

export const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 1rem;
`;

export const GraphTitle = styled.h2`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align:left;
`;

export const DropdownButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  background: #1a1a1a;
  color: #ffffff;
  border: 1px solid #3a3a3a;
  cursor: pointer;

  &:hover {
    background: #2a2a2a;
  }
`;


export const ChartPlaceholder = styled.div`
  height: 220px;
  background: #121212;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

/* ---------- KPI ---------- */
export const KpiDescription = styled.p`
  font-size: 0.5rem;
  color: #777;
  margin-top: 0.25rem;
  line-height: 1.3;
  text-align:left
`;

export const KpiSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const KpiHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const KpiTitle = styled.h2`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left
`;

export const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

export const KpiCard = styled.div`
  background: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 10px;
  padding: 1.5rem 1.5rem;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const KpiSubtitle = styled.div`
  font-weight: bold;
  color: white;
  font-size: 1rem;
  text-align:left;
`;

export const KpiValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1rem;
  text-align: right;
`;
export const VariablesButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.85rem;
  font-weight: 500;

  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #3a3a3a;
  background: transparent;
  color: #ffffff;

  &:hover {
    background: #1f1f1f;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1;
  }
`;
export const ChartCard = styled.div`
  height: 220px;
  background: #121212;
  border-radius: 8px;
  padding: 0.5rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const InfoListWrapper = styled.div<{ show: boolean }>`
  max-height: ${({ show }) => (show ? "500px" : "0px")};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
export const StyledSelect = styled.select`
  padding: 0.4rem 1.75rem 0.4rem 0.75rem; /* right padding for icon space */
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  background: #000000;
  color: #fff;
  border: 1px solid #444;
  appearance: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);

  /* Hide native arrow for consistency */
  &::-ms-expand {
    display: none;
  }

  &:hover {
    background: #111111;
  }

  option {
    background: #000000;
    color: #ffffff;
  }
`;
export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ChevronIcon = styled(ChevronDown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #ffffff;
`;



export const ChartContainer = styled.div`
  position: relative;
  min-height: 240px;
  height: auto;
  background: #;
  border-radius: 8px;
  padding: 3rem 1rem 1rem 2rem;

`;

export const DropdownWrapper = styled.div`
  position: absolute;
  background: #1a1a1a;
  top: 12px;
  right: 12px;
  z-index: 2;
`;