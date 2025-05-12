import { useState } from 'react';
import { useToast } from '@/contexts';
import { postComment } from '@/api/comment';
import { postCommentErrorMessage } from '@/utils/errorMessage';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import styles from './CommentInput.module.scss';

const CommentInput = ({ productId, refreshAfterSubmit }) => {
  const { showToast } = useToast();
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      await postComment(productId, content);

      setContent('');
      refreshAfterSubmit(); // 등록 후 댓글 목록 새로고침
    } catch (error) {
      showToast(postCommentErrorMessage(error.status), 'error');
    }
  };

  return (
    <div className={formStyles.inputContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="content" className={formStyles.labelText}>
          문의하기
        </label>
        <textarea
          id="content"
          name="content"
          value={content}
          className={formStyles.textarea}
          rows={4}
          onChange={(e) => setContent(e.target.value)}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
      </div>
      <button
        type="button"
        className={`${buttonStyles.primary} ${styles.submitButton}`}
        onClick={handleSubmit}
        disabled={!content.trim()}
      >
        등록
      </button>
    </div>
  );
};

export default CommentInput;
