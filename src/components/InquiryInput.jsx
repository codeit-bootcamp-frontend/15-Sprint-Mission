import { useState } from "react";
import "./InquiryInput.css";

const InquiryInput = () => {
  const [text, setText] = useState("");

  return (
    <div className="inquiry-input">
      <h4 className="inquiry-input__title">문의하기</h4>
      <textarea
        className="inquiry-input__notice"
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="inquiry-input__form">
        <button className={`inquiry-input__submit ${text.trim() ? "inquiry-input__submit--active" : ""}`}>등록</button>
      </div>
    </div>
  );
};

export default InquiryInput;
