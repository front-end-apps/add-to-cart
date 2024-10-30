import { useState, useEffect } from "react";
import "./styles/grid-view-menu.scss";
import AddToCart from "../Atoms/AddToCart";
import { delivery, listData } from "../../content/staticContent";
import DetailsPopup from "../Molecules/DetailsPopup";

function GridViewMenu({ items, isCart, isView, onSelectedItemsChange }) {
  const [itemCounts, setItemCounts] = useState(Array(items.length).fill(0));
  const [selectedItem, setSelectedItem] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [fetchDetails, setFetchDetails] = useState({});

  useEffect(() => {
    // console.log('Selected Item:', selectedItem);
    onSelectedItemsChange && onSelectedItemsChange(selectedItem);
  }, [selectedItem, onSelectedItemsChange]);

  const handleMoreItem = (index, item) => {
    setItemCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
    setSelectedItem((prev) => [...prev, item]);
  };

  const handleLessItem = (index, item) => {
    setItemCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] = Math.max(newCounts[index] - 1, 0);
      return newCounts;
    });

    setSelectedItem((prev) => {
      const newSelectedItems = [...prev];
      const itemIndex = newSelectedItems.indexOf(item);
      if (itemIndex > -1) {
        newSelectedItems.splice(itemIndex, 1);
      }
      return newSelectedItems;
    });
  };

  const handleShowDetails = (id) => {
    setShowDetails(!showDetails);
    setFetchDetails(
      listData.find((item) => {
        return item.id === id;
      })
    );
  };

  const listItems = items.map((item, index) => (
    <li key={index}>
      <a href={item.url}>
        <center>
          <img className="responsize-img" src={item.image} alt={item.name} />
          {isView && (
            <div
              className="view-details"
              onClick={() => handleShowDetails(item.id)}
            >
              View Details
            </div>
          )}
        </center>

        <span>
          {item.name}
          {item.amount && <small>₹ {item.amount}</small>}
        </span>
        {isCart && (
          <AddToCart
            itemCount={itemCounts[index]}
            onMoreItem={() => handleMoreItem(index, item.id)}
            onLessItem={() => handleLessItem(index, item.id)}
          />
        )}
      </a>
    </li>
  ));

  return (
    <ul className="grid-view-list">
      {items.length < 1 ? <span>{delivery.out_of_stock}</span> : listItems}
      {showDetails && <DetailsPopup data={fetchDetails} popupButton={handleShowDetails} />}
    </ul>
  );
}

export default GridViewMenu;
