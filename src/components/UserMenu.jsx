import DefaultProfile from "../assets/default-profile.png";

const UserMenu = () => {
  return (
    <img
      src={DefaultProfile}
      alt="기본 프로필 이미지"
      className="h-full w-full"
    />
  );
};
export default UserMenu;
