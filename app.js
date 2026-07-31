(function () {
  "use strict";

  const data = window.HO_LAB_DATA;
  if (!data) return;

  const treatmentButtons = Array.from(document.querySelectorAll("[data-treatment]"));
  const treatmentFields = {
    survival: document.getElementById("survival-value"),
    regression: document.getElementById("regression-value"),
    cd8: document.getElementById("cd8-value"),
    ifng: document.getElementById("ifng-value"),
    ki67: document.getElementById("ki67-value"),
    cd8Bar: document.getElementById("cd8-bar"),
    ifngBar: document.getElementById("ifng-bar"),
    ki67Bar: document.getElementById("ki67-bar"),
    caption: document.getElementById("treatment-caption")
  };

  function selectTreatment(key) {
    const treatment = data.treatments[key];
    treatmentButtons.forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.treatment === key));
    });
    treatmentFields.survival.textContent = treatment.survival;
    treatmentFields.regression.textContent = treatment.regression;
    treatmentFields.cd8.textContent = treatment.cd8.toFixed(1) + "%";
    treatmentFields.ifng.textContent = treatment.ifng.toFixed(1) + "%";
    treatmentFields.ki67.textContent = treatment.ki67.toFixed(1) + "%";
    treatmentFields.cd8Bar.style.width = Math.min(treatment.cd8 / 40 * 100, 100) + "%";
    treatmentFields.ifngBar.style.width = Math.min(treatment.ifng / 30 * 100, 100) + "%";
    treatmentFields.ki67Bar.style.width = Math.min(treatment.ki67 / 30 * 100, 100) + "%";
    treatmentFields.caption.textContent = treatment.caption;
  }

  treatmentButtons.forEach((button) => {
    button.addEventListener("click", () => selectTreatment(button.dataset.treatment));
  });

  const testButtons = Array.from(document.querySelectorAll("[data-test]"));
  const testFields = {
    kicker: document.getElementById("test-kicker"),
    main: document.getElementById("test-main"),
    note: document.getElementById("test-note")
  };

  function selectTest(key) {
    const test = data.tests[key];
    testButtons.forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.test === key));
    });
    testFields.kicker.textContent = test.kicker;
    testFields.main.textContent = test.main;
    testFields.note.textContent = test.note;
  }

  testButtons.forEach((button) => {
    button.addEventListener("click", () => selectTest(button.dataset.test));
  });

  selectTreatment("combination");
  selectTest("tcell");
}());
