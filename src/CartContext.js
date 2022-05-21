import React, { useState, useContext, createContext, useEffect } from "react";

//.- Create context
export const ItemsContext = createContext({});

//.- Create component provider
export const useItemsContext = () => useContext(ItemsContext);

//- Pass props inside provider component
export const CartContext = ({ children }) => {
  //Add localstore
  const itemsInLocal = () => {
    if (localStorage.getItem("cartItems") !== null) {
      return JSON.parse(localStorage.getItem("cartItems"));
    } else {
      return [];
    }
  };
  const darkModeInLocal = () => {
    if (localStorage.getItem("darkMode") !== null) {
      return JSON.parse(localStorage.getItem("darkMode"));
    } else {
      return false;
    }
  };

  //Array of products
  const [cartItems, setCartItems] = useState(itemsInLocal);
  //Sum price of all the products in the cart
  const [totalPrice, setTotalPrice] = useState(0);
  //Sum of products in the cart
  const [totalProducts, setTotalProducts] = useState(0);
  //Item
  const [item, setItem] = useState([]);
  //DarkMode
  const [darkMode, setDarkMode] = useState(darkModeInLocal);
  console.log("MODEEEE", darkMode);

  //Check if an element have the same id
  const isInCart = (id) => cartItems.some((e) => e.id === id);

  const addProduct = () => {
    setTotalProducts(cartItems);
  };

  //Add product to array
  const addToCart = (item, amount) => {
    if (isInCart(item.id)) {
      const newCartItem = cartItems.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, amount: cartElement.amount + amount };
        } else return cartElement;
      });
      setCartItems(newCartItem);
    } else {
      setCartItems((prev) => [...prev, { ...item, amount }]);
    }
  };

  //Add Product to firebase with Form
  const addProductCart = async (cartItems, totalPrice) => {
    const object = {
      item: cartItems,
      date: new Date(),
      total: totalPrice
    };
    console.log("Producto agregado!!!!");

    const updateStock = () => {
      cartItems.forEach((element) => {
        console.log("testtt");
      });
    };
    updateStock();
  };

  //Delete item from array
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  //Clear all the array to empty
  const clear = () => setCartItems([]);

  //Update the ammount of Products in the cart
  const updateItems = () => {
    let sumaProductos = cartItems.reduce((a, item) => a + item.amount, 0);
    setTotalProducts(sumaProductos);
  };

  //Get price from a especific item of the array
  const getPrice = () => {
    const total = cartItems.reduce(
      (a, item) => a + item.price * item.amount,
      0
    );
    setTotalPrice(total);
  };

  const changeMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  //Keep items updated
  useEffect(() => {
    updateItems();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    getPrice();
  });

  return (
    <ItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeItem,
        clear,
        itemsInLocal,
        totalPrice,
        addProduct,
        item,
        setItem,
        totalProducts,
        setTotalProducts,
        isInCart,
        changeMode,
        darkMode
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
