import { useContext } from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/common/Container";
import Title from "../../components/common/Title";
import "./Cards.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Cards = () => {
  const { cardDatas } = useContext(AuthContext);
  return (
    <Container>
      <div className="cards__container">
        <Title
          color="black"
          head="Discover Weekly"
          desc="An enim nullam tempor sapien gravida donec enim ipsum"
        />
        <div className="cards">
          {cardDatas?.map((cardData) => (
            <Card key={cardData.id} cardData={cardData} />
          ))}
        </div>
        <div className="cards__button" style={{ textAlign: "center" }}>
          <button className="card__btn">Get Started</button>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
