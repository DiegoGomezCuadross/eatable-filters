import styled from "@emotion/styled";
import HomeFoodPage from "./pages/homeFoodPage";
import FoodDetailPage from "./pages/foodDetailPage";

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
  grid: ;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-right: 30px;
  margin-left: 30px;
  max-height: 535px;
  overflow: auto;
`;
function App() {
  return FoodDetailPage();
}

export default App;
