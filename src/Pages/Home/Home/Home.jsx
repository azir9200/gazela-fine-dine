import AboutRentaurent from "../AboutRestaurent/AboutRentaurent";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import MainMenu from "../MainMenu/MainMenu";
import ButtonAll from "./ButtonAll/ButtonAll";



const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <MainMenu></MainMenu>
      <ButtonAll></ButtonAll>
      <AboutRentaurent></AboutRentaurent>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;