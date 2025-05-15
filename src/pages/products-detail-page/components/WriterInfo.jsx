import styled from "@emotion/styled";
import { formatDate } from "@/utils/formatDate";
import DefaultProfile from "/profile@3x.png";

const WRITER_INFO_PROFILE_IMG_SIZE = {
  s: "3.5rem",
  m: "4rem",
};

const WRITER_INFO_TEXT_SIZE = {
  s: "1.2rem",
  m: "1.4rem",
};

const WriterInfo = ({ profileImg, name, updatedAt, size = "m" }) => {
  return (
    <WriterInfoContainer>
      <ProfileImageWrapper size={WRITER_INFO_PROFILE_IMG_SIZE[size]}>
        <ProfileImage src={profileImg || DefaultProfile} />
      </ProfileImageWrapper>
      <WriterTextInfoContainer>
        <Name size={WRITER_INFO_TEXT_SIZE[size]}>{name}</Name>
        <UpdatedAt size={WRITER_INFO_TEXT_SIZE[size]}>
          {formatDate(updatedAt)}
        </UpdatedAt>
      </WriterTextInfoContainer>
    </WriterInfoContainer>
  );
};

export default WriterInfo;

const WriterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileImageWrapper = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const WriterTextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Name = styled.p`
  color: var(--gray600);
  font-size: ${(props) => props.size};
`;

const UpdatedAt = styled.p`
  color: var(--gray300);
  font-size: ${(props) => props.size};
`;
