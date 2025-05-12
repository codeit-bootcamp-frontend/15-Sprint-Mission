import { css } from "@emotion/react"
/** @jsxImportSource @emotion/react */

const paginationWrapper = css`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`;

const paginationButton = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--gray-300);
  background: white;
  color: var(--gray-700);
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const activePage = css`
  background: var(--blue);
  color: white;
  border: none;
`;


const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage -1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage +1);
    }

    return(
        <div css={paginationWrapper}>
            <button onClick={handlePrev} disabled={currentPage === 1}>left</button>
            {Array.from({length: totalPages}, (_, i)=> {
                const page = i + 1;
                return(
                    <button 
                        key={page}
                        onClick={() => onPageChange(page)}
                        css={[paginationButton, currentPage === page && activePage]}
                    >
                      {page}
                    </button>
                )
            })}

            <button onClick={handleNext} disabled={currentPage === totalPages}>right</button>
        </div>
    )
}

export default Pagination;