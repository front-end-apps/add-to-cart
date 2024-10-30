import { useState } from "react";
import "./styles/brands.scss";
import SideList from "../Molecules/SideList";
import { listsData } from "../../content/staticContent";
import MenuList from "../Molecules/MenuList";

function Brands(props) {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabText = listsData[activeTab]?.content || "Menu Item(s)";

  const starters = [
    props.vegStarter,
    props.nonVegStarter,
    props.seaFoodStarter,
  ];
  const starterData = starters[activeTab];

  return (
    <div className="brands">
      <SideList
        tabs={listsData}
        activeTabId={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="content">
        <h2 className="heading-2">{activeTabText}</h2>
        {starterData?.length > 0 ? (
          <MenuList data={starterData} />
        ) : (
          <p>No {activeTabText} available.</p>
        )}
      </div>
    </div>
  );
}
export default Brands;
