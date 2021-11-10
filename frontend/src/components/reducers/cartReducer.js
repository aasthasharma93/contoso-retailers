import {
  ADD_TO_CART,
  GET_CART,
  HANDLE_DETAIL,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  GET_BOOKS,
  USER_LOGIN,
  USER_LOGOUT,
  REGISTER_LOGIN,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [],
  addedItems: [],
  total: 0,
  selectedItem: [],
  loggedIn: false,
  loginError: false,
  username: "",
};
const cartReducer = (state = initState, action) => {
  if (action.type === GET_BOOKS) {
    return {
      ...state,
      items: action.payload,
      loading: false,
    };
  }
  if (action.type === HANDLE_DETAIL) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems

    return {
      ...state,
      selectedItem: addedItem,
    };
  }
  //INSIDE HOME COMPONENT
  if (action.type === GET_CART) {
    return {
      ...state,
      addedItems: action.payload,
      loading: false,
    };
  }
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity = addedItem.quantity - 1;

      return {
        ...state,
        total: state.total + addedItem.price,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity } : item
        ),
      };
    } else {
      addedItem.quantity = addedItem.quantity - 1;

      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        //addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity } : item
        ),
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(
      (item) => action.id === item.book.id
    );
    let new_items = state.addedItems.filter(
      (item) => action.id !== item.book.id
    );

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      items: state.items.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity } : item
      ),
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.addedItems.find((item) => action.id === item.book.id);
    //if the qt == 0 then it should be removed
    if (addedItem.book.quantity > 0) {
      addedItem.inCartQuantity += 1;
      addedItem.book.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
        addedItems: [
          ...state.data.addedItems.map((item) =>
            item.book.id === action.id ? { ...item, value: addedItem } : item
          ),
        ],
      };
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.addedItems.find((item) => action.id === item.book.id);
    //if the qt == 0 then it should be removed
    if (addedItem.inCartQuantity === 1) {
      let itemToRemove = state.addedItems.find(
        (item) => action.id === item.book.id
      );
      let new_items = state.addedItems.filter(
        (item) => action.id !== item.book.id
      );
      /*new_items.map((item) => {
        item.book.id === action.id
          ? (item.book.quantity = item.book.quantity)
          : (item.book.quantity = item.book.quantity);
      });*/
      //calculating the total
      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
      console.log(itemToRemove);

      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity } : item
        ),
      };
    } else {
      addedItem.inCartQuantity -= 1;
      addedItem.book.quantity += 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
        addedItems: [
          ...state.data.addedItems.map((item) =>
            item.book.id === action.id ? { ...item, value: addedItem } : item
          ),
        ],
      };
    }
  }

  if (action.type === USER_LOGIN) {
    if (action.payload === "SUCCESS") {
      return {
        ...state,
        loggedIn: true,
        loginError: false,
        username: action.username,
      };
    } else {
      return {
        ...state,
        loggedIn: false,
        loginError: true,
        username: "",
      };
    }
  }
  if (action.type === USER_LOGOUT) {
    if (action.payload === "SUCCESS") {
      return {
        ...state,
        loggedIn: false,
        loginError: false,
        username: "",
      };
    } else {
      return {
        ...state,
        loggedIn: false,
        loginError: true,
        username: "",
      };
    }
  }
  if (action.type === REGISTER_LOGIN) {
    if (action.payload === "SUCCESS") {
      return {
        ...state,
        loggedIn: true,
        loginError: false,
        username: action.username,
      };
    } else {
      return {
        ...state,
        loggedIn: false,
        loginError: true,
        username: "",
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
