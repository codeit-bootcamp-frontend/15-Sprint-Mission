import BestProductions from "./sections/BestProductions";
import AllProductions from "./sections/AllProductions";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ItemsPage = () => {
  return (
    <Layout>
      <BestProductions />
      <AllProductions />
    </Layout>
  );
};

export default ItemsPage;
