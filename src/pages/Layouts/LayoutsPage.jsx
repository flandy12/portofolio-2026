import Navbar from "../../component/Navbar";

export default function LayoutsPage({ children }) {
  return <div className="site-shell"><Navbar /><main>{children}</main></div>;
}
