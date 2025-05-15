import styled from "@emotion/styled";

const Tag = ({ tag }) => {
  return <TagWrapper>#{tag}</TagWrapper>;
};

export default Tag;

const TagWrapper = styled.p`
  width: fit-content;
  padding: 0.5rem 1.6rem;
  background-color: var(--gray100);
  font-size: 1.6rem;
  font-weight: 400;
  border-radius: 50rem;
`;
