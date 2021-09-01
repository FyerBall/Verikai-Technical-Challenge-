import styled from "styled-components";
import Input from "./Input";
import Table from "./Table";

function App() {
  return (
    <Container className="App">
      <Input />
      <Table />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default App;
