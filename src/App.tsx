import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import GrapghColumn from './pages/GraphColumn';
import Data from './pages/Data';
import { ChartDataProvider } from './ChartDataContext';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <ChartDataProvider>
      <div className="flex items-center h-screen bg-gray-100 w-full py-4 transition-all duration-500 gap-4">
        <NavBar setPage={setPage} page={page} />
        {page == 'Home' && <Home />}
        {page == 'GraphColumn' && <GrapghColumn />}
        {page == 'Data' && <Data />}
      </div>
    </ChartDataProvider>
  );
}

export default App;
