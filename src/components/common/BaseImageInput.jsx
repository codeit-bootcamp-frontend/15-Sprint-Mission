import styled from "@emotion/styled";

const BaseImageInput = ({ type = "file", onChange, ...props }) => {
  return <Input type={type} accept="image/*" onChange={onChange} {...props} />;
};

export default BaseImageInput;

const Input = styled.input`
  display: none;
`;
