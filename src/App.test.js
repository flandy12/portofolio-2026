import { render, screen } from "@testing-library/react";
import App from "./App";

test("menampilkan identitas dan navigasi utama portofolio", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /membangun pengalaman digital/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /navigasi utama/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /kirim pesan/i })).toBeInTheDocument();
});
