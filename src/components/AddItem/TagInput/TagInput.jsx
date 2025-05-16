import { RemoveIcon } from '@/components/common/Buttons';
import formStyles from '@/styles/helpers/formHelpers.module.scss';
import tagStyles from '@/styles/helpers/tagHelpers.module.scss';
import styles from './TagInput.module.scss';

const TagInput = ({ tagInput, setTagInput, tags, handleInputChange }) => {
  const handleTagEnter = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const trimmed = tagInput.trim();
      if (!tags.includes(trimmed)) {
        handleInputChange({ field: 'tags', value: [...tags, trimmed] });
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    handleInputChange({
      field: 'tags',
      value: tags.filter((tag) => tag !== tagToRemove),
    });
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
          className={formStyles.input}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagEnter}
        />
      </div>
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <div key={tag} className={tagStyles.tag}>
            #{tag}
            <RemoveIcon
              onClick={() => handleRemoveTag(tag)}
              className="removeIconTag"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
