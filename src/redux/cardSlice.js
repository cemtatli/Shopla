import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let card = localStorage.getItem("card");
  if (card) {
    return JSON.parse(localStorage.getItem("card"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("card", JSON.stringify(data));
};

const initialState = {
  cards: getLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isItemCard = state.cards.find((item) => item.id === action.payload.id);

      if (isItemCard) {
        const tempCard = state.cards.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotal = tempQty + item.price;
            return { ...item, quantity: tempQty, totalPrice: tempTotal };
          } else {
            return item;
          }
        });
        state.cards = tempCard;
        storeInLocalStorage(state.cards);
      } else {
        state.cards.push(action.payload);
        storeInLocalStorage(state.cards);
      }
    },
    removeFromCard: (state, action) => {
      const tempCard = state.cards.filter((item) => item.id !== action.payload);
      state.cards = tempCard;
      storeInLocalStorage(state.cards);
    },
    removeFromCardAll: (state) => {
      state.cards = [];
      storeInLocalStorage(state.cards);
    },
    getCardTotal: (state) => {
      state.totalAmount = state.cards.reduce((cardTotal, cardItem) => {
        return (cardTotal += cardItem.price * cardItem.productCount);
      }, 0);
      storeInLocalStorage(state.cards);
      state.itemCount = state.cards.length;
    },
  },
});

export const { addToCard, removeFromCard, removeFromCardAll, getCardTotal } = cardSlice.actions;
export default cardSlice.reducer;
