import * as S from './formTags.styles';

const FormTags = ({ tagInput, tags, onTagInputChange, onTagKeyDown, onTagRemove }) => {
  return (
    <>
      <label>태그</label>
      <input
        css={S.inputStyle}
        placeholder="태그를 입력해주세요"
        value={tagInput}
        onChange={onTagInputChange}
        onKeyDown={onTagKeyDown}
      />

      <div css={S.tagListContainerStyle}>
        {tags.map((tag, index) => (
          <div key={index} css={S.tagItemStyle}>
            {`#${tag}`}
            <button
              type="button"
              onClick={() => onTagRemove(index)}
              css={S.tagButtonStyle}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FormTags;
