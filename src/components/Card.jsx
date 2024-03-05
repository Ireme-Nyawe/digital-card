import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Interest from "./Interest";

export default function Card() {
  return (
    <div class="card">
      <Header />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
