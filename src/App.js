import React,{ useState } from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
import requests from "./requests";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [movieD, setMovieD] = useState({});

  const modal = (movie) => {
    setShowModal(!showModal);
    setMovieD(movie);
  }


  return (
    <div className="App">
      <Nav />
      <Banner />
      <Detail showModal={showModal} setShowModal={setShowModal} movie={movieD}  />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
        modal={modal}
      />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} modal={modal}   />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} modal={modal}   />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} modal={modal}   />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} modal={modal}   />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} modal={modal}   />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} modal={modal}   />

     
    </div>
  );
};

export default App;
