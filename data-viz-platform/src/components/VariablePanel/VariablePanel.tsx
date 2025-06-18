import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { X, RotateCcw, Plus, Check, Sparkles, ChevronUp, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleVariable, applyVariables } from "../../store/variableSlice";
import type { RootState } from "../../store/store";

// styled components split out for cleaner JSX
import {
  Overlay,
  Panel,
  VariableCardContainer,
  Header,
  Title,
  Close,
  SearchRow,
  SearchInput,
  Autofill,
  Rerun,
  Section,
  Label,
  TagGroup,
  Tag,
  HighlightTag,
  DescriptionBox,
  Expandable,
  Divider,
  CompactLimeIconButton
} from "../VariablePanel/VariablePanel.styled";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const VariablePanel: React.FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const selectedVariables = useSelector((state: RootState) => state.variables.selected);

  // internal animation control for slide-in/out
  const [isVisible, setIsVisible] = useState(isOpen);

  const [infoVariable, setInfoVariable] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  // filtering logic based on search input
  const filterBySearch = (vars: string[]) =>
    vars.filter((v) => v.toLowerCase().includes(searchTerm));

  // hardcoded sections for now (would be great to make this dynamic eventually)
  const section1 = filterBySearch(["Carbon 1", "Co2 Distribution", "Fleet sizing"]);
  const section2 = filterBySearch(["Parking Rate", "Border Rate", "Request rate"]);
  const section3 = filterBySearch(["Variable 1"]);

  // toggles for expanding/collapsing variable group descriptions
  const [showPrimary, setShowPrimary] = useState(true);
  const [showSecondary, setShowSecondary] = useState(true);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  // toggle variable + manage description display (with special delay for Co2 Distribution)
  const handleClick = (variable: string) => {
    dispatch(toggleVariable(variable));
    setInfoVariable(null);

    if (variable === "Co2 Distribution") {
      setTimeout(() => {
        setInfoVariable(variable);
      }, 1500);
    }
  };

  // gracefully close panel with delay matching transition
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  type VariableTagProps = {
    name: string;
    active: boolean;
    onClick: () => void;
    onEnter: () => void;
    onLeave: () => void;
  };

  // pill-style variable tag with hover and icon toggle
  const VariableTag: React.FC<VariableTagProps> = ({
    name,
    active,
    onClick,
    onEnter,
    onLeave,
  }) => {
    const TagComponent = active ? HighlightTag : Tag;

    return (
      <TagComponent onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <span style={{ marginRight: "0.5rem" }}>✨</span>
        {name}
        <span style={{ marginLeft: "0.5rem", display: "flex" }}>
          {active ? <Check size={14} /> : <Plus size={14} />}
        </span>
      </TagComponent>
    );
  };

  // render list of tags with logic for tooltips and delayed description display
  const renderTags = (variables: string[]) =>
    variables
      .filter((v) => v.toLowerCase().includes(searchTerm))
      .map((v) => {
        const isActive = selectedVariables.includes(v);
        const TagComponent = isActive ? HighlightTag : Tag;

        return (
          <TagComponent
            key={v}
            onClick={() => dispatch(toggleVariable(v))}
            onMouseEnter={() => {
              if (v === "Co2 Distribution") {
                timerRef.current = setTimeout(() => {
                  setInfoVariable(v);
                }, 1500);
              } else {
                setInfoVariable(v);
              }
            }}
            onMouseLeave={() => {
              if (v === "Co2 Distribution") {
                if (timerRef.current) clearTimeout(timerRef.current);
                setTimeout(() => setInfoVariable(null), 1500);
              } else {
                setInfoVariable(null);
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
              minWidth: "140px",
              maxWidth: "100%",
            }}
          >
            <span style={{ flexGrow: 1, textAlign: "left" }}>{v}</span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Sparkles size={14} color="#aaa" />
              {isActive ? <Check size={12} /> : <Plus size={14} />}
            </span>
          </TagComponent>
        );
      });

  return (
    <>
      {/* Backdrop */}
      <Overlay isOpen={isVisible} onClick={handleClose} />

      {/* Slide-in Panel */}
      <Panel isOpen={isVisible}>
        <Header>
          <Title>Edit Variables</Title>
          <Close onClick={handleClose}>
            <X size={20} />
          </Close>
        </Header>

        {/* Top row: search input + action buttons */}
        <SearchRow>
          <SearchInput
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <Autofill>Autofill</Autofill>
          <Rerun
            onClick={() => {
              dispatch(applyVariables());
              handleClose();
            }}
          >
            <RotateCcw size={14} /> Rerun
          </Rerun>
        </SearchRow>

        {/* Main content: categorized variable pills */}
        <VariableCardContainer>
          {section1.length > 0 && (
            <Section>
              <Label>Variable Category 1</Label>
              <TagGroup>{renderTags(section1)}</TagGroup>
            </Section>
          )}

          {section2.length > 0 && (
            <Section>
              <Label>Variable Category 2</Label>
              <TagGroup>{renderTags(section2)}</TagGroup>
            </Section>
          )}

          {section3.length > 0 && (
            <Section>
              <Label>Variable Category 3</Label>
              <TagGroup>{renderTags(section3)}</TagGroup>
            </Section>
          )}

          {/* fallback when nothing matches the search */}
          {section1.length + section2.length + section3.length === 0 && (
            <div style={{ color: "#aaa", padding: "1rem", textAlign: "center" }}>
              No variables match your search.
            </div>
          )}

          {/* optional info panel for Co2 */}
          {infoVariable === "Co2 Distribution" && (
            <Section>
              <Label>{infoVariable}</Label>
              <Divider />
              <DescriptionBox>
                CO₂ distribution describes how demand is spread across zones. High values = more emissions.
              </DescriptionBox>
            </Section>
          )}
        </VariableCardContainer>

        {/* Expandable toggles for Primary/Secondary blocks */}
        <Expandable
          onClick={() => setShowPrimary((prev) => !prev)}
          style={{ position: "relative", paddingRight: "2rem" }}
        >
          Primary Variables
          <CompactLimeIconButton
            style={{
              position: "absolute",
              top: "50%",
              right: "8px",
              transform: "translateY(-50%)",
            }}
          >
            {showPrimary ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </CompactLimeIconButton>
        </Expandable>
        {showPrimary && (
          <div
            style={{
              padding: "0.75rem 1rem",
              color: "#aaa",
              fontSize: "0.85rem",
              animation: "slideFadeIn 0.3s ease",
            }}
          >
            Primary variables.
          </div>
        )}

        <Expandable
          onClick={() => setShowSecondary((prev) => !prev)}
          style={{ position: "relative", paddingRight: "2rem" }}
        >
          Secondary Variables
          <CompactLimeIconButton
            style={{
              position: "absolute",
              top: "50%",
              right: "8px",
              transform: "translateY(-50%)",
            }}
          >
            {showSecondary ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </CompactLimeIconButton>
        </Expandable>
        {showSecondary && (
          <div
            style={{
              padding: "0.75rem 1rem",
              color: "#aaa",
              fontSize: "0.85rem",
              animation: "slideFadeIn 0.3s ease",
            }}
          >
            Secondary Variables
          </div>
        )}
      </Panel>
    </>
  );
};

export default VariablePanel;
