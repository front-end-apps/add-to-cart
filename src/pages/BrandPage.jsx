import { useState } from "react";
import Tabs from "../Components/Molecules/Tabs";
import {
  tabsDataBrands,
  seaFoodData,
  nonVegStarterData,
  vegStarterData,
} from "../content/staticContent";
import Brands from "../Components/Organisms/Brands";
import { useParams } from "react-router-dom";
import BrandsBanner from "../Components/Organisms/BrandsBanner"


function BrandPage() {
  const [activeTab, setActiveTab] = useState(1);
  const { brandURL } = useParams();


  return (
    <>
      <BrandsBanner brand={brandURL}/>
      <section>
        <div className="z-container">
          <Tabs
            tabs={tabsDataBrands}
            activeTabId={activeTab}
            onTabChange={setActiveTab}
          />
          {activeTab === 0 && (
            <div className="brands">Overview Coming Soon</div>
          )}
          {activeTab === 1 && (
            <Brands
              vegStarter={vegStarterData[brandURL]}
              nonVegStarter={nonVegStarterData[brandURL]}
              seaFoodStarter={seaFoodData[brandURL]}
            />
          )}
          {activeTab === 2 && <div className="brands">Reviews Coming Soon</div>}
        </div>
      </section>
    </>
  );
}
export default BrandPage;
