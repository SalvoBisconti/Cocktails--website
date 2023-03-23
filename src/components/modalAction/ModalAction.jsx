import "./index.module.scss";
import styles from "./index.module.scss";
import { useState } from "react";
const ModalAction = ({
  setIsPresentationModal,
  setIsPopup,
  dataPrenotation,
  setDataPrenotation,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const onHandleCloseModal = () => setIsPresentationModal((prev) => !prev);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setDataPrenotation({
      name: name,
      email: email,
      date: date,
    });
    console.log(dataPrenotation);
  };

  const onHandleInputName = (e) => setName(e.target.value);
  const onHandleInputEmail = (e) => setEmail(e.target.value);
  const onHandleInputDate = (e) => setDate(e.target.value);

  const popupAppear = () => {
    setIsPopup((prev) => !prev);

    setTimeout(() => {
      setIsPopup((prev) => !prev);
    }, 2200);
  };

  return (
    <div className={styles.ModalAction}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
      <div className={styles.content}>
        <h1 className={styles.text}>Reserve your table</h1>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onHandleInputName}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onHandleInputEmail}
            required
          />
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={onHandleInputDate}
            required
          />
          <button type="submit" className={styles.button} onClick={popupAppear}>
            Prenote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalAction;
