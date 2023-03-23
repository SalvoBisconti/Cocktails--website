import "./index.module.scss";
import styles from "./index.module.scss";

const MenuList = ({ listClass }) => {
  return (
    <ul className={listClass}>
      <li>Menù</li>
      <li>Reviews</li>
      <li>About</li>
      <li>Order</li>
    </ul>
  );
};
export default MenuList;
