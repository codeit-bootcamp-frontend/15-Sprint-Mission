import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";

function AddItemPage() {
  return (
    <div>
      <Header />
      <div className="max-w-1200 m-auto flex flex-col gap-24 pt-24 px-15 pb-52">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">상품 등록하기</div>
          <Button type="upload" disabled>
            등록
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="text-2lg font-bold">상품 이미지</div>
          <div className="size-168 pc:size-282 bg-gray100 text-gray400 text-lg font-regular rounded-xl">
            이미지 등록
          </div>
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="text-2lg font-bold">상품명</div>
          <InputField
            className="bg-gray100 text-gray400 text-lg font-regular rounded-xl py-16 px-24"
            placeholder="상품명을 입력해주세요"
          />
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="text-2lg font-bold">상품 소개</div>
          <InputField
            className="h-282 bg-gray100 text-gray400 text-lg font-regular rounded-xl py-16 px-24"
            placeholder="상품 소개를 입력해주세요"
          />
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="text-2lg font-bold">판매가격</div>
          <InputField
            className="bg-gray100 text-gray400 text-lg font-regular rounded-xl py-16 px-24"
            placeholder="판매 가격을 입력해주세요"
          />
        </div>
        <div className="flex flex-col justify-center gap-16">
          <div className="text-2lg font-bold">태그</div>
          <InputField
            className="bg-gray100 text-gray400 text-lg font-regular rounded-xl py-16 px-24"
            placeholder="태그를 입력해주세요"
          />
        </div>
      </div>
    </div>
  );
}

export default AddItemPage;
