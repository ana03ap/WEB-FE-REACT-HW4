import Footer from "./components/Footer";
import Header from "./components/Header";

import Intro from "./components/Intro"
import OrgID from "./components/OrgID";
import Objetivos from "./components/Objetivos"
import Dofa from "./components/Dofa";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Intro/>
      <Dofa />
      <OrgID />
      <Objetivos />
      <Footer />
    </div>
  );
}

export default App;