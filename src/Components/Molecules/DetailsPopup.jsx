const DetailsPopup = ({data, popupButton}) => {
  return (
    <div className="items-details-popup">
      <div className="close-items-details-popup" onClick={popupButton}>
        &times;
      </div>
      <div className="items-details-popup-content">
        <div className="row">
      
          <div className="cell">
            <img
              src={data.image}
              height="80"
              width="80"
              alt="Item Image"
            />
          </div>
          <div className="cell">
            <strong>Order: </strong>
            {data.name}
          </div>
          <div className="cell">
            <strong>Amount: </strong>
            {data.amount}
          </div>
          <div className="cell">
            <strong>ID:</strong> {data.id}
          </div>
        </div>
        <div className="row">
          <div className="cell">
            <small>
              This delicious <strong>{data.name}</strong> dish is
              prepared with fresh ingredients. Enjoy a delightful meal packed
              with flavor!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopup;
