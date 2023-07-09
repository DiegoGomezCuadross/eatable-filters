import styled from "@emotion/styled";
import Search from "../components/search";
import NavFood from "../components/navFood";
import Price from "../components/price";
import Food from "../components/food";
import Footer from "../components/footer";
import { getProducts } from "../services/products-service";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 414px;
  max-height: 896px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 45px;
  background: #d1d5db;
  border-radius: 20px;
`;
const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-right: 30px;
  margin-left: 30px;
  max-height: 535px;
  overflow: auto;
  padding-top: 40px;
`;
function HomeFoodPage() {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.log)
    
  },[])
  console.log(products)
  
  return (
    <Container>
      
      <Search />
      <NavFood />
      <Price />
      <ContainerCard>
        {products?.map(product => {
          return <Food {...product}></Food>
        })}
      </ContainerCard>
      <Footer />
    </Container>
  );
}

export default HomeFoodPage;
