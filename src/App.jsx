import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './presentation/HomePage';
import ServicePage from './presentation/ServicePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/service" element={<ServicePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
