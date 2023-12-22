import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../views/Home'

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers