import React, { useState } from 'react';
import DataTable from './components/DataTable';
import ProductForme from './components/ProductForme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme/Theme'; // Adjust the path
import { Box } from '@mui/material';
import LandingPage from './components/LandingPage';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setPage={setCurrentPage} />
      <Box style={{ padding: '20px' }}>
        {currentPage === 'Add Grocery' && <ProductForme />}
        {currentPage === 'Groceries' && <DataTable />}
        {currentPage === null && <LandingPage />}
      </Box>
    </ThemeProvider>
  );
};

export default App;

