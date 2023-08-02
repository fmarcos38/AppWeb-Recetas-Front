import React, { useState, useEffect } from 'react';
import './estilos.css';


function Paginado({paginaActual, totalPag, onChangePag}) {
    console.log("pagActPaginado: ", paginaActual)
    
    const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const generatePageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= totalPag; i++) {
        pages.push(i);
      }
      setPageNumbers(pages);
    };
    generatePageNumbers();
  }, [totalPag]);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`page-item ${page === paginaActual ? 'active' : ''}`}
          >
            <button
              className="page-link"
              onClick={() => onChangePag(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Paginado