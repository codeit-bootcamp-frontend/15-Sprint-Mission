import { css } from "@emotion/react";

const InputField = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  onKeyPress,
}) => {
  return (
    <div css={inputFieldContainer}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          css={inputFieldStyle(name)}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          css={inputFieldStyle(name)}
          onKeyPress={onKeyPress}
        />
      )}
    </div>
  );
};

export default InputField;

const inputFieldContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--gray800);
  font-style: normal;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const inputFieldStyle = (name) => css`
  display: flex; // 변경: flex에서 block으로
  height: ${name === "itemDescription" ? "282px" : "56px"}; // 높이 조정
  align-items: flex-start;

  font-family: Pretendard;
  padding: 16px 24px;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: none;
  background: var(--gray100);
  color: var(--gray800);
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box; // 패딩과 테두리를 포함하여 크기 조정
`;
