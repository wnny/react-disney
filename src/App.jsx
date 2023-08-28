import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Row from "./components/Row";
import request from "./api/request";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Banner />
        <Category />
        <Row title="Trending Now" id="TN" fetchUrl={request.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated} />
        <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies} />
        <Row title="Cometdy Movies" id="CM" fetchUrl={request.fetchComedyMovies} />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
