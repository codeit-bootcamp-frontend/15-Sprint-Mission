import styled from "@emotion/styled";

const BaseTextarea = ({ ref, value, onChange, ...props }) => {
  return <Textarea ref={ref} value={value} onChange={onChange} {...props} />;
};

export default BaseTextarea;

const Textarea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 8rem;
  resize: none;
  overflow: hidden;
  padding: 1.6rem 2.4rem;
  background-color: var(--gray100);
  border-radius: 1.2rem;
  border: 2px solid var(--gray100);
  font-size: 1.4rem;
  line-height: 2.4rem;

  &:focus {
    outline: none;
    border: 2px solid var(--blue);
  }
`;
