import XIcon from "../assets/icons/icon-X.png";

const Tag = ({ children, onDelete }) => {
  return (
    <div className="bg-secondary-100 text-secondary-800 font-regular flex items-center justify-between gap-8 rounded-[26px] py-5 pr-12 pl-16 text-lg">
      {children}
      <button onClick={() => onDelete(children)}>
        <img src={XIcon} alt="x아이콘" className="size-20" />
      </button>
    </div>
  );
};
export default Tag;
