import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-20">{children}</main>
    </>
  );
}
