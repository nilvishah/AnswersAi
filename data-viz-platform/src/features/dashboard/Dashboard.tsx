import React from "react";
import { useState, useRef } from "react";
import Chart from "../../components/Chart";
import VariablePanel from "../../components/VariablePanel/VariablePanel";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store"; // using typed state from Redux store
import VariablesPopover from "../../components/VariablesPicker";
import {
  SlidersHorizontal,
  Upload,
  Star,
  ChevronUp,
} from "lucide-react";
import {
  IconButton,
  PillButton,
  Header,
  Heading,
  ControlGroup,
  ScenarioRow,
  ScenarioLabel,
  LimeIconButton,
  InfoList,
  InfoBox,
  MainContent,
  GraphSection,
  GraphCard,
  GraphHeader,
  GraphTitle,
  DropdownButton,
  ChartPlaceholder,
  KpiDescription,
  KpiSection,
  KpiHeader,
  KpiTitle,
  KpiGrid,
  KpiCard,
  KpiSubtitle,
  KpiValue,
  VariablesButton,
  ChartCard,
  InfoListWrapper,
  StyledSelect,
  SelectWrapper,
  ChevronIcon,
  ChartContainer,
  DropdownWrapper
} from "./DashboardStyles";

/* ------------------- Main Dashboard Component ------------------- */
const Dashboard: React.FC = () => {
  // get selected and applied variables from Redux store
  const selectedVariables = useSelector((state: RootState) => state.variables.selected);
  const appliedVariables = useSelector((state: RootState) => state.variables.applied);

  // metric shown in dropdown (used in the KPI chart dropdown)
  const [selectedMetric, setSelectedMetric] = React.useState("Fleet sizing");

  // control visibility of popover and variable panel
  const [showPicker, setShowPicker] = useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  // toggle for showing the "Best Scenario" section
  const [showResults, setShowResults] = React.useState(true);

  const btnRef = useRef<HTMLButtonElement>(null); // anchor reference for popover

  console.log("🧪 Applied Variables:", appliedVariables); // debug log

  return (
    <>
      {/* ---------- Top header bar ---------- */}
      <Header>
        <Heading>⚡ Charging Station</Heading>
        <ControlGroup>
          <IconButton aria-label="Filter">
            <SlidersHorizontal size={20} strokeWidth={1.7} />
          </IconButton>
          <PillButton active onClick={() => setShowPanel(true)}>
            Edit Variables
          </PillButton>
          <IconButton aria-label="Upload">
            <Upload size={20} strokeWidth={1.7} />
          </IconButton>
        </ControlGroup>
      </Header>

      {/* ---------- Best Scenario Toggle + Summary ---------- */}
      <ScenarioRow>
        <ScenarioLabel>
          <Star size={18} />
          Best Scenario Results
        </ScenarioLabel>
        <LimeIconButton
          aria-label="Collapse / Expand"
          onClick={() => setShowResults(prev => !prev)}
        >
          <ChevronUp
            size={18}
            strokeWidth={1.7}
            style={{
              transform: showResults ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </LimeIconButton>
      </ScenarioRow>

      {/* ---------- Best Scenario Description Section ---------- */}
      <InfoListWrapper show={showResults}>
        <InfoList>
          <InfoBox>
            The best configuration based on <strong>profit</strong> has 11 zones
            with charging stations and 48 total poles.
          </InfoBox>
          <InfoBox>
            The best configuration based on <strong>satisfied demand</strong> has
            11 zones with charging stations and 48 total poles.
          </InfoBox>
        </InfoList>
      </InfoListWrapper>

      {/* ---------- Chart + KPI Section ---------- */}
      <MainContent>
        <GraphSection>
          <GraphHeader>
            <GraphTitle>Graphs</GraphTitle>
          </GraphHeader>

          <GraphCard>
            <ChartContainer>
              <DropdownWrapper>
                <SelectWrapper>
                  {/* Dropdown to pick one of the main metrics */}
                  <StyledSelect
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                  >
                    <option value="Unsatisfied Demand %">Unsatisfied Demand %</option>
                    <option value="Fleet sizing">Fleet sizing</option>
                    <option value="Charging Growth">Charging Growth</option>
                  </StyledSelect>
                  <ChevronIcon size={16} />
                </SelectWrapper>
              </DropdownWrapper>

              {/* Chart renders based on currently applied Redux variables */}
              <Chart selectedVariables={appliedVariables} />
            </ChartContainer>
          </GraphCard>
        </GraphSection>

        {/* ---------- KPI Cards ---------- */}
        <KpiSection>
          <KpiHeader>
            <KpiTitle>Key Performance Indicators</KpiTitle>

            {/* Popover button for managing variables (not the side panel) */}
            <VariablesButton ref={btnRef} onClick={() => setShowPicker(prev => !prev)}>
              Variables&nbsp;<span>+</span>
            </VariablesButton>

            {showPicker && btnRef.current && (
              <VariablesPopover
                anchorRect={btnRef.current.getBoundingClientRect()}
                onClose={() => setShowPicker(false)}
              />
            )}
          </KpiHeader>

          <KpiGrid>
            {/* Each card shows a KPI */}
            <KpiCard>
              <KpiSubtitle>Infrastructure Units</KpiSubtitle>
              <KpiDescription>
                This describes variable two and what the shown data means.
              </KpiDescription>
              <KpiValue>€421.07</KpiValue>
            </KpiCard>

            <KpiCard>
              <KpiSubtitle>Charging Growth</KpiSubtitle>
              <KpiDescription>
                This describes variable two and what the shown data means.
              </KpiDescription>
              <KpiValue>33.07</KpiValue>
            </KpiCard>

            <KpiCard>
              <KpiSubtitle>Localization change</KpiSubtitle>
              <KpiDescription>
                This describes variable two and what the shown data means.
              </KpiDescription>
              <KpiValue>21.9%</KpiValue>
            </KpiCard>

            <KpiCard>
              <KpiSubtitle>Fleet growth</KpiSubtitle>
              <KpiDescription>
                This describes variable two and what the shown data means.
              </KpiDescription>
              <KpiValue>7.03%</KpiValue>
            </KpiCard>
          </KpiGrid>
        </KpiSection>
      </MainContent>

      {/* Slide-over panel for selecting variables */}
      <VariablePanel isOpen={showPanel} onClose={() => setShowPanel(false)} />
    </>
  );
};

export default Dashboard;
