import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Pagination from './Components/Pagination';
import Main from './Components/Main';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header/>
      <Main currentPage={currentPage}/>
      <Pagination
       currentPage={currentPage}
       totalPages={totalPages}
       onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
