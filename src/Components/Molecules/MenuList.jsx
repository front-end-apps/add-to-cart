import MenuItem from "./MenuItem";
function MenuList(props) {
  return (
    <>
      {props.data.map((item, index) => (
        <MenuItem
          key={index}
          image={item.image}
          name={item.name}
          label={item.label}
          votes={item.votes}
          price={item.price}
          details={item.details}
        />
      ))}
    </>
  );
}
export default MenuList;
