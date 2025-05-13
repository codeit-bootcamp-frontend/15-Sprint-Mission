import styled from "@emotion/styled";
import DeleteButton from "@components/DeleteButton";

const TagsSection = ({ tags, deleteTag }) => {
  return (
    <TagsContainer>
      {Array.from(tags).map((tag) => (
        <Tag key={tag}>
          #{tag}
          <DeleteButton onClick={() => deleteTag(tag)} size="s" />
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default TagsSection;

const TagsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.div`
  width: fit-content;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 3rem;
  background-color: var(--gray100);
  font-size: 1.4rem;
`;
