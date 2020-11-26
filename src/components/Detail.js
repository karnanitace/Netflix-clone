import React,{ useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Detail = ({showModal, setShowModal, movie}) => {
  

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const modalRef = useRef();

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowModal(false);
    }
    
  }


  return (
      <>
      {showModal && (
        <div className="modal-background" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal-wrapper">
                <h3>Movie : {movie?.name || movie?.title}</h3>
                <p><strong> Overview</strong> : {movie.overview}</p>
                <p><strong>Rating</strong> : {`${movie.vote_average}`}/10</p>
                <button onClick={() => setShowModal(!showModal)}>x</button>
            </div>
            </animated.div>
        </div>
      )}
     
        
      </>
      
  )
};

export default Detail;
