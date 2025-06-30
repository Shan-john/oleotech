import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './presentation/HomePage';
import ServicePage from './presentation/ServicePage';
import Aboutpage from "./presentation/Aboutpage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/aboutus" element={<Aboutpage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
