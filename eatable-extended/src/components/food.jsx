import styled from "@emotion/styled";
import foodImage from "../images/food.svg";

const ContainerCard = styled.div`
  width: 156px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 30px 60px 0px rgba(100, 57, 57, 0.1);
`;
const ContainerText = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0 13px 0 13px;
`;

const ContainerTitle = styled.div`
description (FoodCard)
display: flex;
width: 130px;
flex-direction: column;
justify-content: center;
color: var(--black, #333);
text-align: center;
font-size: 22px;
font-weight: 600;
`;
const ContainerPrice = styled.div`
  color: var(--orange, #fa4a0c);
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  flex-shrink: 0;
  margin: 0 13px 13px;
  border-radius: 130px;
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.2));
`;
function Food() {
  return (
    <ContainerCard>
      <Image src={foodImage} alt="Food image" />
      <ContainerText>
        <ContainerTitle>Veggie tomato mix</ContainerTitle>
        <ContainerPrice>$15.45</ContainerPrice>
      </ContainerText>
    </ContainerCard>
  );
}
export default Food;
