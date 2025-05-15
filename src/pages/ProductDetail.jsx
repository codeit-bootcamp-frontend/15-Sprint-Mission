import { Link, useParams } from "react-router-dom";
import { getItemDetail } from "../apis/detailApi";
import { useEffect, useState } from "react";
import noImage from "../assets/images/no-image.png";
import avatar from "../assets/images/avatar.png";
import HeartIcon from "../assets/icons/icon_heart";
import VerticalEllipsis from "../assets/icons/icon_vertical-ellipsis";
import { getComments } from "../apis/commentApi";
import { formatDateToYMD, formatToTimeAgo } from "../assets/utils";
import ReturnIcon from "../assets/icons/icon_return";
import noComment from "../assets/images/no-comments.png";

export default function ProductDetail() {
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [commentText, setCommentText] = useState("");
  const { productId } = useParams();

  const getDetailData = async () => {
    try {
      setIsLoading(true);
      const data = await getItemDetail(productId);
      setItem(data);
    } catch (error) {
      console.error("상품 상세 데이터 오류", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCommentsData = async () => {
    try {
      setIsLoading(true);
      const data = await getComments({ productId });
      setComments(data.list);
    } catch (error) {
      console.error("코멘트 데이터 오류", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      getDetailData();
      getCommentsData();
    }
  }, [productId]);

  const handleEdit = (id, content) => {
    setEditingCommentId(id);
    setEditedContent(content);
    setOpenMenuId(null); // 드롭다운 닫기
  };

  if (isLoading) {
    return <p className="text-center animate-bounce ">로딩 중..</p>;
  }

  if (!item) {
    return <p className="text-center animate-bounce">상품 정보가 없습니다.</p>;
  }

  return (
    <div className="max-w-[120rem] mx-auto p-7">
      <div className="flex flex-col md:flex-row w-full h-[25%] gap-10 mx-auto text-[#4B5563] border-b-gray-200 border-b pb-10">
        <div className="w-full md:w-[35%] h-full">
          <img
            className="h-full aspect-1/1 rounded-3xl"
            src={item.images[0] || noImage}
          />
        </div>
        <div className="flex flex-col w-full md:w-[65%] justify-between">
          <div className="flex flex-col gap-5 mb-5 text-[#1F2937]">
            <div className="flex justify-between pr-5 ">
              <h3 className="text-[2rem] font-[600]">{item.name}</h3>
              <VerticalEllipsis />
            </div>
            <h1 className="text-[3.2rem] font-[600]">
              {item.price.toLocaleString()}원
            </h1>
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <h5 className="text-[1.4rem] font-[600]">상품 소개</h5>
            <p className="text-[1.2rem] font-[400] h-[10vh]">
              {item.description}
            </p>
          </div>
          <div className="flex flex-col gap-5 mb-5">
            <h5 className="text-[1.4rem] font-[600]">상품 태그</h5>
            <div className="flex gap-2 flex-wrap mt-2">
              {item.tags &&
                item.tags.map((tag) => (
                  <div
                    key={tag}
                    className="bg-gray-100 text-black px-3 py-2 rounded-full flex items-center text-[1.2rem]"
                  >
                    #{tag}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex w-full justify-between items-center bg-transparent">
            <div className="flex h-full items-center gap-3">
              <img
                src={avatar}
                className="bg-gray-300 rounded-full size-[4rem]"
                alt="Owner Avatar"
              />
              <div className="flex flex-col py-1 justify-between h-full">
                <p className="text-[#4B5563]">{item.ownerNickname}</p>
                <p className="text-[#9CA3AF]">
                  {formatDateToYMD(item.updatedAt)}
                </p>
              </div>
            </div>
            <div className="flex border border-[#E5E7EB] rounded-full px-2 py-0.5">
              <HeartIcon />
              <p>{item.favoriteCount}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10">
        <h3 className="text-[1.4rem] font-[600]">문의하기</h3>
        <textarea
          id="productDescription"
          placeholder="개인정보를 공유 및 요청하시거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          rows="5"
          className="w-full p-4 bg-[#F3F4F6] placeholder:text-[#9CA3AF] placeholder:text-[1.4rem]"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end ">
          <button
            type="submit"
            className={`py-2.5 px-4 rounded-md transition-all text-white cursor-pointer
    ${
      commentText.trim() === ""
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-[#3692FF] hover:scale-120"
    }
  `}
            disabled={commentText.trim() === ""} // 입력 없으면 비활성화
          >
            등록
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10 my-10">
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <div className="flex flex-col gap-10 border-b border-b-gray-200 pb-5">
              {/* ✅ 수정 input 영역 */}
              {editingCommentId === comment.id && (
                <div className="flex flex-col gap-2 mb-2">
                  <textarea
                    type="text"
                    value={editedContent}
                    rows="2"
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="border p-2 rounded text-[1.4rem] bg-[#F3F4F6] text-[#1F2937]"
                    placeholder="수정할 내용을 입력하세요"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      className="text-[1rem] text-[#737373] font-[600] px-5 py-2 border border-gray-300 rounded-xl"
                      onClick={() => setEditingCommentId(null)}
                    >
                      취소
                    </button>
                    <button
                      className="text-[1rem] font-[600] px-5 py-2 bg-[#3692FF] text-white rounded-xl"
                      onClick={() => setEditingCommentId(null)}
                    >
                      수정 완료
                    </button>
                  </div>
                </div>
              )}
              <div className="flex justify-between pr-5">
                <p className="text-[1.2rem] font-[400]">{comment.content}</p>
                <div className="relative">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      setOpenMenuId(
                        openMenuId === comment.id ? null : comment.id
                      )
                    }
                  >
                    <VerticalEllipsis />
                  </button>
                  {openMenuId === comment.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md z-10">
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#3692FF] hover:text-white"
                        onClick={() => handleEdit(comment.id, comment.content)}
                      >
                        수정하기
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-[#3692FF] hover:text-white">
                        삭제하기
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex h-full items-center gap-3">
                <img
                  src={avatar}
                  className="bg-gray-300 rounded-full size-[4rem]"
                  alt="Owner Avatar"
                />
                <div className="flex flex-col py-1 justify-between h-full">
                  <p>{comment.writer.nickname}</p>
                  <p className="text-gray-400">
                    {formatToTimeAgo(comment.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <img className="aspect-square w-1/6" src={noComment} />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Link
          to="/items"
          className="bg-[#3692FF] flex text-white items-center text-[1.6rem] py-3 px-5 rounded-full transition-all hover:scale-120"
        >
          목록으로 돌아가기 <ReturnIcon />
        </Link>
      </div>
    </div>
  );
}
