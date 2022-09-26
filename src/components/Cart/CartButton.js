import classes from "./CartButton.module.css";
import { useDispatch,useSelector } from "react-redux";
import { uiActions } from "../Store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };
  const liveQuantity = useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{liveQuantity}</span>
    </button>
  );
};

export default CartButton;
