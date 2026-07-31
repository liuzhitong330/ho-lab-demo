window.HO_LAB_DATA = {
  treatments: {
    control: {
      survival: "19 days",
      regression: "0%",
      cd8: 13.6,
      ifng: 5.7,
      ki67: 5.9,
      caption: "Control tumors showed the lowest CD8 infiltration and effector activity. In the GL261-WT experiment, median survival was 19 days and no complete regressions were reported."
    },
    lb100: {
      survival: "18.5 days",
      regression: "0%",
      cd8: 12.4,
      ifng: 5.0,
      ki67: 5.5,
      caption: "LB-100 alone changed inflammatory signaling but did not improve GL261-WT median survival relative to control. This is consistent with an adaptive checkpoint limiting the benefit of greater T-cell activation."
    },
    pd1: {
      survival: "19 days",
      regression: "0%",
      cd8: 19.6,
      ifng: 6.5,
      ki67: 9.7,
      caption: "Anti-PD-1 alone modestly increased several immune measures but did not improve GL261-WT median survival or produce complete regression in the reported experiment."
    },
    combination: {
      survival: "26 days",
      regression: "25%",
      cd8: 37.6,
      ifng: 24.5,
      ki67: 25.4,
      caption: "With LB-100 plus anti-PD-1, CD8 infiltration, effector cytokine production, and proliferation rose together. GL261-WT median survival increased from 19 to 26 days, with complete regression in 25% of mice."
    }
  },
  tests: {
    tcell: {
      kicker: "Dependency confirmed",
      main: "Depleting CD4+, CD8+, or both populations removed the combination's survival benefit.",
      note: "The treatment effect therefore required both arms of the adaptive T-cell response; it was not explained by a tumor-cell-only action of LB-100."
    },
    ifng: {
      kicker: "Mediator confirmed",
      main: "Blocking IFN-γ abolished the LB-100-associated increase in GL261 PD-L1.",
      note: "LB-100 did not raise PD-L1 when applied to GL261 cells without T cells, supporting a paracrine T-cell-to-tumor signal rather than a direct tumor-cell effect."
    },
    memory: {
      kicker: "Specificity confirmed",
      main: "Cured mice survived GL261 re-challenge, but not B16 melanoma re-challenge.",
      note: "At least 80 days after the original inoculation, GL261 re-challenge produced 100% long-term survival in cured mice versus 0% in naïve controls (P < 0.01)."
    }
  }
};
