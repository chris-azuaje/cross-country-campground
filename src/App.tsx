import { TopSection } from './components/TopSection';
import { Navbar } from './components/Navbar';
import { Introduction } from './components/Introduction';
import { Home } from './components/Home';
import { Divider } from './components/Divider';
import { About } from './components/About';
import { Rules } from './components/Rules';
import { Rates } from './components/Rates';
import { Activities } from './components/Activities';
import { Calendar } from './components/Calendar';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { ContactUs } from './components/ContactUs';
import { Success } from './components/Success';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <TopSection />
      <Navbar />
      <Introduction />
      <Home />
      <Divider />
      <About />
      <Divider />
      {/* <Rules /> */}
      {/* <Rates /> */}
      <Activities />
      <Divider />
      {/* <Calendar /> */}
      {/* <Gallery /> */}
      <Services />
      <Divider />
      <ContactUs />
      {/* <Success /> */}
      <Footer />
    </div>
  );
}

export default App;
