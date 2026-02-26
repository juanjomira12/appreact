import { Header } from './features/layout/components/Header';
import { Content } from './features/layout/components/Content';
import { Footer } from './features/layout/components/Footer';
import { Article } from './features/layout/components/Article';
import { Props } from './features/layout/components/Props';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/articles' element={<Article/>} />
          <Route path='/props' element={<Props/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
