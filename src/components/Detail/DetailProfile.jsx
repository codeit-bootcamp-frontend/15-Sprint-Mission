import styles from './styles/DetailProfile.module.css';

export default function DetailProfile({ profileImage, profileNickname, profileUpdate, isComment=false}) {
  return (
    <div className={`${styles.profile} ${isComment ? styles.isComment : ''}`}>
      <div className={styles.profileImage}>
        <img
          src={profileImage || '/images/common/ic_log.svg'}
          alt='프로필 이미지'
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/common/ic_log.svg';
          }}
        />
      </div>
      <div>
        <p className={styles.profileNickName}>{profileNickname}</p>
        <p className={styles.profileUpdate}>{profileUpdate}</p>
      </div>
    </div>
  );
}
