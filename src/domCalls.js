import React, { useRef } from "react";
import "./styles.css";

const HeritageScroll = () => {
  const listRef = useRef();

  const scrollToIndex = (index) => {
    const listItems = listRef.current?.children;

    if (listItems && listItems[index]) {
      // Scroll into view
      listItems[index].scrollIntoView({ behavior: "smooth", block: "center" });

      // Add highlight class
      listItems[index].classList.add("highlight");

      // Remove highlight class after 2 seconds
      setTimeout(() => {
        listItems[index].classList.remove("highlight");
      }, 2000);
    }
  };

  return (
    <>
      <nav className="navigation">
        <button onClick={() => scrollToIndex(0)}>Butterball</button>
        <button onClick={() => scrollToIndex(1)}>Panch Ratha</button>
        <button onClick={() => scrollToIndex(2)}>Shore Temple</button>
        <button onClick={() => scrollToIndex(3)}>Temple</button>
      </nav>
      <div className="image-container">
        <ul className="image-list" ref={listRef}>
          <li className="image-item">
            <img
              src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/14a324c9a875181d6e561c3ab9a3ea3b_1000x1000.jpg"
              alt="Butterball"
            />
          </li>
          <li className="image-item">
            <img
              src="https://www.worldhistory.org/img/r/p/500x600/4127.jpg?v=1618794907"
              alt="Panch Ratha"
            />
          </li>
          <li className="image-item">
            <img
              src="https://optimatravels.com/images/tamil-nadu-images/shore-temple.jpg"
              alt="Shore Temple"
            />
          </li>
          <li className="image-item">
            <img
              src="https://tourismtn.com/wp-content/uploads/2018/01/Mahabalipuram.jpg"
              alt="Temple"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeritageScroll;
