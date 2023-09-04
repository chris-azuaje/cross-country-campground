import './App.css';
import { TopSection } from './components/TopSection';
import { Navbar } from './components/Navbar';
import { Introduction } from './components/Introduction';
import { Home } from './components/Home';
import { Divider } from './components/Divider';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Services } from './components/Services';
import { ContactUs } from './components/ContactUs';
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
      <Activities />
      <Divider />
      <Services />
      <Divider />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
