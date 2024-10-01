import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function Home() {
  return (  
    <div>
      <Header></Header>
      
        <div className="image-container">
          <img
            src="image.png"
            alt="Profile Picture"
            className="profile-image"
          />
          
        </div>
        <Footer></Footer>
        </div>
        
  );
}
