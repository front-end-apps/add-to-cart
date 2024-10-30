import "./styles/tabs.scss";
function Tabs({ tabs, activeTabId, onTabChange }) {

const handleTabClick = (id) => {
    onTabChange(id); // Call the parent callback
  };

  return (
    <section className="tabs">
      <div className="z-container">
        <ul className="tab-list">

        {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === activeTabId ? "is-active" : ""}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Tabs;
