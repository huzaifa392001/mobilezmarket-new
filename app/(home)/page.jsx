import MobileBanner from "@/Components/MobileBanner/MobileBanner";
import RoundButtons from "@/Components/RoundButtons/RoundButtons";

export default function Home() {
  const categories = [
    {
      name: "Mobiles",
      url: "",
      icon: "fas fa-mobile",
    },
    {
      name: "Tablets",
      url: "",
      icon: "fas fa-tablet",
    },
    {
      name: "Watches",
      url: "",
      icon: "fas fa-watch-fitness",
    },
    {
      name: "Accessories",
      url: "",
      icon: "fas fa-headset",
    },
    {
      name: "Used Devices",
      url: "",
      icon: "fas fa-mobile",
    },
    {
      name: "New Devices",
      url: "",
      icon: "fas fa-tablet",
    },
    {
      name: "Approved",
      url: "",
      icon: "fas fa-watch-fitness",
    },
    {
      name: "Un-Approved",
      url: "",
      icon: "fas fa-headset",
    },
  ];

  const brands = [
    {
      name: "apple",
      url: "",
      icon: "apple.png",
    },
    {
      name: "Google",
      url: "",
      icon: "google.png",
    },
    {
      name: "Honor",
      url: "",
      icon: "honor.png",
    },
    {
      name: "Huawei",
      url: "",
      icon: "huawei.png",
    },
    {
      name: "Infinix",
      url: "",
      icon: "infinix.png",
    },
    {
      name: "itel",
      url: "",
      icon: "itel.png",
    },
    {
      name: "OnePlus",
      url: "",
      icon: "onePlus.png",
    },
    {
      name: "Oppo",
      url: "",
      icon: "oppo.png",
    },
    {
      name: "RealMe",
      url: "",
      icon: "realme.png",
    },
    {
      name: "Samsung",
      url: "",
      icon: "samsung.png",
    },
    {
      name: "tecno",
      url: "",
      icon: "tecno.png",
    },
    {
      name: "vivo",
      url: "",
      icon: "vivo.png",
    },
  ];
  return (
    <>
      <MobileBanner />
      <section className="categoriesSec">
        <div className="container">
          <h2 className="secHeading">Categories</h2>
          <RoundButtons
            className={"grid4"}
            iconClass="small"
            links={categories}
          />
        </div>
      </section>
      <section className="brandsSec">
        <div className="container">
          <h2 className="secHeading">Brands</h2>
          <RoundButtons
            spaceBetween={10}
            slidesPerView={4}
            slider
            links={brands}
          />
        </div>
      </section>
    </>
  );
}
