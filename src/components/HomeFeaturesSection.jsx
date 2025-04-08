function HomeFeaturesSection() {
  return (
    <section class="main-container">
      <article class="container">
        <img
          class="container-img"
          src="/assets/images/img_home_01.png"
          alt="인기 상품 확인 이미지"
        />
        <div class="description first">
          <h4>Hot item</h4>
          <h2>
            <span class="line-break">인기 상품을</span> 확인 해보세요
          </h2>
          <h3>
            가장 HOT한 중고거래 물품을
            <br /> 판다마켓에서 확인해보세요
          </h3>
        </div>
      </article>
      <article class="container scd">
        <div class="description second">
          <h4>Search</h4>
          <h2>
            <span class="line-break">구매를 원하는</span> 상품을 검색하세요
          </h2>
          <h3>
            구매하고 싶은 물품은 검색해서
            <br /> 쉽게 찾아보세요
          </h3>
        </div>
        <img
          class="container-img"
          src="/assets/images/img_home_02.png"
          alt="물품 검색 이미지"
        />
      </article>
      <article class="container">
        <img
          class="container-img"
          src="/assets/images/img_home_03.png"
          alt="물품 판매 이미지"
        />
        <div class="description third">
          <h4>Register</h4>
          <h2>
            <span class="line-break">판매를 원하는</span> 상품을 등록하세요
          </h2>
          <h3>
            어떤 물건이든 판매하고 싶은 상품을
            <br /> 쉽게 등록하세요
          </h3>
        </div>
      </article>
    </section>
  );
}

export default HomeFeaturesSection;
