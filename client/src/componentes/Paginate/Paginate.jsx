import React from "react";
import style from "./Paginate.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Paginate = ({
  countriesPerPage,
  filteredCountries,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(filteredCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  let startPage;
  if (currentPage <= 3) {
    startPage = 1;
  } else if (currentPage + 2 >= pageNumbers.length) {
    startPage = pageNumbers.length - 4;
  } else {
    startPage = currentPage - 2;
  }
  const limitedPageNumbers = pageNumbers.slice(startPage - 1, startPage + 4);

  return (
    <div className={style.paginateCtn}>
      <ul>
        {limitedPageNumbers.map((number) => {
          return (
            <li
              onClick={() => paginate(number)}
              key={number}
              style={{
                backgroundColor:
                  currentPage === number ? "rgba(128, 128, 128, 0.7)" : "initial",
              }}
            >
              <a className={style.paginateAnchor}>{number} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginate;
