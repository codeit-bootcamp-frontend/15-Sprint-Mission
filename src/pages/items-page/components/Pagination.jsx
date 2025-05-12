import styled from "@emotion/styled";
import LeftArrowIcon from "@assets/icons/leftArrow";
import RightArrowIcon from "@assets/icons/rightArrow";

const Pagination = ({ totalCount, pageSize, page, onChange }) => {
  const totalPage = Math.ceil(totalCount / pageSize);
  const maxVisible = 5;
  const half = Math.floor(maxVisible / 2);

  let startPage = page - half;
  let endPage = page + half;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPage, maxVisible);
  }

  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = Math.max(1, totalPage - maxVisible + 1);
  }

  const tagList = [];
  for (let i = startPage; i <= endPage; i++) {
    tagList.push(
      <PageItem key={i} onClick={() => onChange(i)} active={i === page}>
        {i}
      </PageItem>
    );
  }

  return (
    <PaginationList>
      <PageItem key="first" onClick={() => onChange(1)} active={false}>
        <LeftArrowIcon />
      </PageItem>
      {tagList}
      <PageItem key="last" onClick={() => onChange(totalPage)} active={false}>
        <RightArrowIcon />
      </PageItem>
    </PaginationList>
  );
};

export default Pagination;

const PaginationList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.3rem;
  cursor: pointer;
`;

const PageItem = styled.li`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray200);
  border-radius: 100%;
  background-color: ${({ active }) =>
    active ? "var(--blue)" : "var(--white)"};
  color: ${({ active }) => (active ? "var(--white)" : "var(--gray800)")};
  font-size: 1.2rem;
  transition: none;

  &:hover {
    background-color: var(--gray100);
    color: var(--gray800);
  }
`;
