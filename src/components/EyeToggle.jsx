import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const EyeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default function EyeToggle({
  showPassword,
  onToggle,
  eyeOpenIcon,
  eyeClosedIcon,
}) {
  return (
    <ToggleButton onClick={onToggle}>
      <EyeIcon
        src={showPassword ? eyeClosedIcon : eyeOpenIcon}
        alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
      />
    </ToggleButton>
  );
}
