import styles from "./index.module.scss";

const MenuList = ({ listClass, prenote, func }) => {
  return (
    <ul className={listClass}>
      <li>Menù</li>
      <li>Reviews</li>
      <li>About</li>
      <li className={prenote} onClick={func}>
        Prenote
      </li>
    </ul>
  );
};
export default MenuList;
