import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Section2 from './Components/Section2';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Sectiontab from './Components/Sectiontab';
import Loader from './Components/Loader';
import Back from './Components/Back';
function App() {
 
  return (
    <div>
      <Loader />
      <Back />
     <Header />
     <Header2 />
     <Section2 />
<Sectiontab />
     <Cards />
     <Footer />
    </div>
  );
}

export default App;
