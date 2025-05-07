import buttonStyles from '@/styles/helpers/buttonHelpers.module.scss';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import styles from './TagInput.module.scss';

const TagInput = ({ tagInput, setTagInput, tags, setTags }) => {
  const handleTagEnter = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (!tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={styles.productTag}>
      <div className={formStyles.inputContainer}>
        <label htmlFor="productTag" className={formStyles.labelText}>
          태그
        </label>
        <input
          id="productTag"
          type="text"
          value={tagInput}
          placeholder="태그를 입력해주세요"
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagEnter}
        />
      </div>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            #{tag}
            <button
              type="button"
              className={`${buttonStyles.removeIcon} ${styles['removeIcon--tag']}`}
              onClick={() => handleRemoveTag(tag)}
              aria-label="Delete a tag"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
