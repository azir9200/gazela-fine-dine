import AboutRentaurent from "../AboutRestaurent/AboutRentaurent";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import MainMenu from "../MainMenu/MainMenu";



const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <MainMenu></MainMenu>
      <AboutRentaurent></AboutRentaurent>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;