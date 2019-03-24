import React from 'react';

const Pagination = ({ activePage, count, handleButtonClick }) => {
  const pagesCount = Math.ceil(count / 10);
  const pages = Array(pagesCount)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div>
      {pages.map(p => (
        <button
          key={p}
          style={p === activePage ? {background: "red"} : {}}
          onClick={() => handleButtonClick(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
