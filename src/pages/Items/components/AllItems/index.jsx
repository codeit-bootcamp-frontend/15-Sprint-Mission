import useProducts from "@/hooks/useProducts";
import heart from "@/assets/icons/ic_heart.svg";

function AllItems() {
  const { items, loading, error } = useProducts(1, 10, "recent");

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!Array.isArray(items) || items.length === 0)
    return <div>상품이 없습니다.</div>;

  return (
    <section>
      <header>
        <h2>전체 상품</h2>
      </header>
      <main>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <article>
                {item.images && <img src={item.images} alt={item.name} />}
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price?.toLocaleString()}원</p>
                  <p>
                    <img src={heart} alt="좋아요" />
                    {item.favoriteCount}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}

export default AllItems;
