import "./styles/list.scss";
function SideList({ tabs, activeTabId, onTabChange }) {
  const handleTabClick = (id) => {
    onTabChange(id); // Call the parent callback
  };
  return (
    <ul className="list">
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
  );
}
export default SideList;
