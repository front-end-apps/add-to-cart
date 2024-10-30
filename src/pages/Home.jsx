import { useState, Suspense, lazy } from "react";
import Tabs from "../Components/Molecules/Tabs";
import {
  delivery,
  tabsData,
  listData,
  topBrandsData,
} from "../content/staticContent";
import SkeletomCards from "../Components/Skeleton/Cards";

const GridViewList = lazy(() => import("../Components/Molecules/GridViewMenu"));

function Home({updateCartItem}) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <Tabs
        tabs={tabsData}
        activeTabId={activeTab}
        onTabChange={setActiveTab}
      />
      <section className="section gray-box">
        <div className="z-container">
          <h3 className="heading">{delivery.first_order}</h3>

          {activeTab === 0 && <div>Dining Out Coming Soon</div>}
          {activeTab === 1 && (
            <Suspense fallback={<SkeletomCards length={6} />}>
              <GridViewList
                isCart="true"
                isView="true"
                items={listData}
                onSelectedItemsChange={updateCartItem}
              />
            </Suspense>
          )}
          {activeTab === 2 && <div>Nightlife Coming Soon</div>}
        </div>
      </section>
      <section className="section top-brands">
        <div className="z-container">
          <h3 className="heading">{delivery.top_brands}</h3>
          <Suspense fallback={<div>Loading...</div>}>
            <GridViewList items={topBrandsData} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
export default Home;
