import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import "jest-canvas-mock";

jest.mock("react-chartjs-2", () => ({
  Doughnut: () => null,
}));
