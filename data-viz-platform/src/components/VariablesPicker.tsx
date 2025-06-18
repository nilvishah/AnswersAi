import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { toggleVariable } from "../store/variableSlice";

/* --- Styled Components --- */

// Main popover container – positioned relative to anchorRect
const Pop = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;

  background: #1a1a1a;
  border: 1px solid #3a3a3a;
  border-radius: 8px;
  padding: 1rem;
  width: 260px;
  z-index: 60;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .45);

  // responsive handling for small screens
  @media (max-width: 480px) {
    left: 55% !important;
    top: ${({ top }) => top + 8}px;
    transform: translateX(-50%);
    width: 90vw;
    max-width: 320px;
  }
`;

// Header row – includes title and close (X) button
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .75rem;

  h4 {
    margin: 0;
    font-size: 1rem;
    color: #fff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #999;

    &:hover {
      color: #fff;
    }
  }
`;

// Each variable item (checkbox + label text)
const Item = styled.label<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: .9rem;
  margin-bottom: .5rem;
  cursor: pointer;
  user-select: none;
  color: ${({ active }) => (active ? "#fff" : "#aaa")};

  input {
    accent-color: #a6ff03;
  }
`;

/* --- Props --- */
interface Props {
  anchorRect: DOMRect; // used to position the popover
  onClose: () => void; // callback when closed
}

const VariablesPicker: React.FC<Props> = ({ anchorRect, onClose }) => {
  const ref = useRef<HTMLDivElement>(null); // for outside-click detection
  const dispatch = useDispatch();

  // Pulling state from Redux
  const { available, selected } = useSelector((s: RootState) => s.variables);

  /* ---- useEffect: handle outside click and Escape key ---- */
  useEffect(() => {
    const handler = (e: MouseEvent) =>
      ref.current && !ref.current.contains(e.target as Node) && onClose();

    const esc = (e: KeyboardEvent) =>
      e.key === "Escape" && onClose();

    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", esc);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  return (
    <Pop
      ref={ref}
      top={anchorRect.bottom + 8}  // slight vertical offset from anchor
      left={anchorRect.left - 20}  // slight left adjustment
    >
      {/* Header section */}
      <Head>
        <h4>Select variables</h4>
        <button onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
      </Head>

      {/* List of available variables */}
      {available.map(v => (
        <Item key={v} active={selected.includes(v)}>
          <input
            type="checkbox"
            checked={selected.includes(v)}
            onChange={() => dispatch(toggleVariable(v))}
          />
          {v}
        </Item>
      ))}
    </Pop>
  );
};

export default VariablesPicker;
