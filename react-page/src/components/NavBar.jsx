import Logo from '../assets/logo.png';
import ProfileImg from '../assets/ProfileImg.png';
import MobileLogo from '../assets/MobileLogo.png';
import useDeviceSize from '../hooks/useDeviceSize';

const NavBar = () => {
  const { isMobile } = useDeviceSize();

  return (
    <div className='w-full flex items-center justify-between lg:px-[20rem] px-[1.6rem] py-3'>
      <div className='flex  items-center justify-center'>
        {isMobile ? (
          <img
            src={MobileLogo}
            alt='MobileHeader'
            className='w-[10rem] h-[4rem] mr-[3.2rem] cursor-pointer'
            onClick={() => {
              window.location.href = '/index.html';
            }}
          />
        ) : (
          <img
            src={Logo}
            alt='HeaderLogo'
            className='w-[15.3rem] h-[5.1rem] mr-[2rem] cursor-pointer'
            onClick={() => {
              window.location.href = '/index.html';
            }}
          />
        )}

        <div className='text-[1.4rem] font-[700] flex gap-6 md:text-[1.8rem]'>
          <p className=''>자유게시판</p>
          <p className='text-[#3692ff]'>중고마켓</p>
        </div>
      </div>
      <img src={ProfileImg} alt='ProfileImg' className='w-[4rem] h-[4rem]' />
    </div>
  );
};

export default NavBar;
