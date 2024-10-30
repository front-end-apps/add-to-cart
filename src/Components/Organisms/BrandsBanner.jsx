import { topBrandsData } from "../../content/staticContent";

const BrandsBanner = ({ brand }) => {
  const tenant = topBrandsData.find(item => item.url.endsWith(brand));

  if (!tenant) {
    return (
      <section className="banner">
        <h1 className="banner-text">Brand Not Found</h1>
      </section>
    );
  }

  const bannerBg = {
    backgroundImage: `url(${tenant.banner})`,
  };

  return (
    <section className="banner" style={bannerBg}>
      <h1 className="banner-text">{tenant.name}</h1>
      <div className="brand-image">
        <img src={tenant.image} alt={tenant.name} />
      </div>
    </section>
  );
};

export default BrandsBanner;
