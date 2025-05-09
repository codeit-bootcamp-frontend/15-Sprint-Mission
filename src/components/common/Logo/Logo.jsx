import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/urls';
import logoTypo from '@/assets/images/logo_typo.svg';
import pandaFace from '@/assets/images/panda_face.svg';
import styles from './Logo.module.scss';

const Logo = ({ size = 'default', className = '' }) => {
  return (
    <Link
      to={ROUTES.ROOT}
      className={`${styles.logoContainer} ${styles[size]} ${className}`}
    >
      <img src={pandaFace} alt="Logo" className={styles.logo} />
      <h1>
        <img src={logoTypo} alt="Panda market" className={styles.logoTypo} />
      </h1>
    </Link>
  );
};

export default Logo;
