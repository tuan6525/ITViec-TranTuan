import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const [page, setPage] = useState(currentPage);

    const handlePageClick = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
            onPageChange(newPage);
            
            // Cuộn lên đầu trang khi đổi trang
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Cuộn mượt
            });
        }
    };

    return (
        <div className="pagination">
            <button onClick={() => handlePageClick(page - 1)} disabled={page === 1}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button onClick={() => handlePageClick(1)} className={page === 1 ? "active" : ""}>
                1
            </button>
            {page > 2 && <span className="dots">...</span>}
            {page > 1 && page < totalPages && (
                <button onClick={() => handlePageClick(page)} className="active">
                    {page}
                </button>
            )}
            {page < totalPages - 1 && <span className="dots">...</span>}
            <button onClick={() => handlePageClick(totalPages)} className={page === totalPages ? "active" : ""}>
                {totalPages}
            </button>
            <button onClick={() => handlePageClick(page + 1)} disabled={page === totalPages}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
    );
};

export default Pagination;
