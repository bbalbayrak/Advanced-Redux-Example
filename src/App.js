import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./components/Store/cart-actions";

let isInitial = true;

function App() {
  const visible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart)); // with action creator
    }
  }, [cart, dispatch]);
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.setNotification({
  //         status: "pending..",
  //         title: "Sending",
  //         message: "Sending cart data!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-redux-exp-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     dispatch(
  //       uiActions.setNotification({
  //         status: "success",
  //         title: "Success",
  //         message: "Send cart data successfully!",
  //       })
  //     );
  //   };
  //   if(isInitial){
  //     isInitial=false
  //     return;
  //   }
  //   sendCartData().catch((error) => {
  //     dispatch(
  //       uiActions.setNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Sending cart data failed!",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);
  return (
    <Fragment>
      <Layout>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
        {visible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
