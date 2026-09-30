import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("menampilkan identitas dan navigasi utama portofolio", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /membangun pengalaman digital/i })).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /navigasi utama/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /selected work/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /kirim pesan/i })).toBeInTheDocument();
});

test("membuka dan menutup detail studi kasus proyek", () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole("button", { name: /lihat studi kasus/i })[8]);

  expect(screen.getByRole("dialog", { name: /ai photobooth/i })).toBeInTheDocument();
  expect(screen.getByText(/ai style transformation/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /tutup studi kasus/i }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
