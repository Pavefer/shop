import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from './pages/Home';

import './App.css';
import { Layout } from './Layout';
import { Category } from "./pages/Category";

function App() {
  return (
    <div className="App">
       <Layout>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
       </Layout>
    </div>
  );
}

export default App;
