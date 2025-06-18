import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

/* 
   State shape for variable selection flow
   selected  – pills the user is actively toggling in the UI (draft)
   applied   – variables that have been “committed” via the Rerun button
   available – master list shown in pop-overs / panels
*/
interface VariableState {
  selected: string[];
  applied: string[];
  available: string[];
}

/* default state – tweak the available list whenever you add metrics */
const initialState: VariableState = {
  selected: [],
  applied: [],
  available: ["Carbon 1", "Fleet Size", "Charging Demand"],
};

const variableSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    /* toggleVariable ⇢ add / remove from the *selected* (draft) list */
    toggleVariable: (state, action: PayloadAction<string>) => {
      const index = state.selected.indexOf(action.payload);
      if (index === -1) {
        state.selected.push(action.payload);
      } else {
        state.selected.splice(index, 1);
      }
    },

    /* applyVariables ⇢ copy draft list to *applied* (used by the chart) */
    applyVariables: (state) => {
      state.applied = [...state.selected];
    },

    /* setAvailableVariables ⇢ replace the master list (handy if you fetch) */
    setAvailableVariables: (state, action: PayloadAction<string[]>) => {
      state.available = action.payload;
    },
  },
});

export const {
  toggleVariable,
  setAvailableVariables,
  applyVariables,
} = variableSlice.actions;

export default variableSlice.reducer;
