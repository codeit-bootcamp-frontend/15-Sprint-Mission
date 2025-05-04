import DefaultProfile from "../../assets/images/default-profile.png";

const UserMenu = () => {
  return (
    <img
      src={DefaultProfile}
      alt="기본 프로필 이미지"
      className="size-40 object-contain"
    />
  );
};
export default UserMenu;
