import Logo from '../assets/logo.png';
import ProfileImg from '../assets/ProfileImg.png';

const NavBar = () => {
  return (
    <div className='w-full flex items-center justify-between lg:px-[20rem] md:px-3'>
      <img src={Logo} alt='HeaderLogo' className='w-[15.3rem] h-[5.1rem]' />
      <div>
        <p>자유게시판</p>
        <p>중고마켓</p>
      </div>
      <img src={ProfileImg} alt='ProfileImg' className='w-[4rem] h-[4rem]' />
    </div>
  );
};

export default NavBar;
