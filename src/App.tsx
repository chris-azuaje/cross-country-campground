import { TopSection } from "./components/TopSection";
import { Navbar } from "./components/Navbar";
import { Introduction } from "./components/Introduction";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Activities } from "./components/Activities";
import { Services } from "./components/Services";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <TopSection />
      <Navbar />
      <Introduction />
      <Home />
      <About />
      <Activities />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
