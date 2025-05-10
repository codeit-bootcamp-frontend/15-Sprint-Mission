import Button from "../components/Button";
import ItemCard from "../components/ItemCard";
import Search from "../components/Search";
import Sort from "../components/Sort";

const ItemsPage = () => {
  const item = {
    id: 805,
    name: " 귀여운 단비",
    description: "귀여운 단비입니당",
    price: 99999,
    tags: ["귀여움", "단비", "캐릭터"],
    images: [
      "https://i.pinimg.com/474x/5f/1c/92/5f1c9268ed8c4dc83b4534263868cb31.jpg",
    ],
    ownerId: 1121,
    favoriteCount: 0,
    createdAt: "2025-05-03T17:18:17.180Z",
    updatedAt: "2025-05-03T17:18:17.180Z",
  };
  const items = [
    {
      id: 834,
      name: "유부 우동 컵라면",
      description: "진짜 맛있습니다. 드셔보셔요",
      price: 10000,
      tags: ["맛나겟쥬?", "내가 팔아서 더 비쌈"],
      images: [
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/1014/1746780352164/food.png",
      ],
      ownerId: 1014,
      favoriteCount: 0,
      createdAt: "2025-05-09T08:49:43.319Z",
      updatedAt: "2025-05-09T08:49:43.319Z",
    },
    {
      id: 833,
      name: "연휴너무짧다",
      description: "zzz",
      price: 111111111,
      tags: ["#어린이날", "#어버이날", "#스승의날", "#부처님오신날"],
      images: [
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/1047/1746678204865/IMG_1329.jpeg",
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Sprint_Mission/user/1047/1746754256275/boheme7777_6646.jpg",
      ],
      ownerId: 1047,
      favoriteCount: 0,
      createdAt: "2025-05-08T04:24:37.962Z",
      updatedAt: "2025-05-09T01:46:43.879Z",
    },
    {
      id: 819,
      name: "울보 단비수정이다난",
      description: "울보 단비ㅇㄹㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ",
      price: 5000,
      tags: ["단비", "캐릭터", "찡찡이", "울보"],
      images: [
        "https://i.pinimg.com/474x/5f/1c/92/5f1c9268ed8c4dc83b4534263868cb31.jpg",
      ],
      ownerId: 1197,
      favoriteCount: 3,
      createdAt: "2025-05-04T18:07:26.518Z",
      updatedAt: "2025-05-08T05:40:10.944Z",
    },
    {
      id: 809,
      name: "ㅇㅇ",
      description: "ㅇㅇ",
      price: 100123,
      tags: ["dd"],
      images: [],
      ownerId: 1070,
      favoriteCount: 2,
      createdAt: "2025-05-04T14:34:20.586Z",
      updatedAt: "2025-05-06T02:50:27.864Z",
    },
  ];
  return (
    <div className="tablet:p-24 tablet:pb-72 tablet:gap-40 flex flex-col gap-24 p-16 pb-36">
      <section className="flex flex-col gap-16">
        <h2 className="text-secondary-900 text-xl font-bold">베스트 상품</h2>
        <ItemCard item={item} />
      </section>
      <section className="tablet:gap-24 flex flex-col gap-16">
        <div className="tablet:gap-12 tablet:flex-nowrap flex flex-wrap items-center justify-between gap-8">
          <h2 className="tablet:order-1 text-secondary-900 grow text-xl font-bold">
            전체 상품
          </h2>
          <Button className="tablet:order-3">상품 등록하기</Button>
          <Search
            className={
              "tablet:order-2 tablet:max-w-325 tablet:min-w-250 tablet:basis-1/3 basis-[calc(100%-56px)]"
            }
          />
          <Sort className={"tablet:order-4"} />
        </div>
        <ul className="tablet:grid-cols-3 grid grid-cols-2 gap-x-8 gap-y-32">
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default ItemsPage;
