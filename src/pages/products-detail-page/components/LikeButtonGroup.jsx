import styled from "@emotion/styled";
import HeartIcon from "@assets/icons/heart";

const LikeButtonGroup = ({ likeCount }) => {
  return (
    <LikeContainer>
      <HeartIcon />
      <LikeCount>{Number(likeCount).toLocaleString()}</LikeCount>
    </LikeContainer>
  );
};
export default LikeButtonGroup;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50rem;
  background-color: var(--white);
  border: 1px solid var(--gray200);
  cursor: pointer;

  &:hover svg {
    // todo: hover ui
  }
`;

const LikeCount = styled.p`
  font-size: 1.6rem;
  color: var(--gray500);
`;
