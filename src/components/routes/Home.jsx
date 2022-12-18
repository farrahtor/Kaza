import { housingList } from "../../datas/housingList";
import { Banner } from "../desktop/Banner";
import HomeImg from "../../assets/images/HomeBanner.jpg";
import "../../assets/sass/routes/Home.scss";
import { HouseCard } from "../desktop/HouseCard";

export const Home = () => {
  return (
    <div className="home">
      <section className="home-section-banner">
        <Banner image={HomeImg} content={"Chez vous, partout et ailleurs"} />
      </section>
      <section className="home-section-houseCard">
        {housingList.map(({ id, cover, title }) => (
          <HouseCard key={id} id={id} cover={cover} title={title} />
        ))}
      </section>
    </div>
  );
};
