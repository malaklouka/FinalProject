import * as addto from '../const/addto';

export const addtoReducer = (state = { Items: [],  }, action) => {
  switch (action.type) {
    case addto.ADD_TO_DEMAND_ITEM:
      const item = action.payload;

      const existItem = state.Items.find((x) => x.bagId === item.bagId);

      if (existItem) {
        return {
          ...state,
          Items: state.Items.map((x) => (x.bagId === existItem.bagId ? item : x)),
        };
      } else {
        return {
          ...state,
          Items: [...state.Items, item],
        };
      }
    case addto.DEMAND_REMOVE_ITEM:
      return {
        ...state,
        Items: state.Items.filter((x) => x.bagId !== action.payload),
      };
   
   
    case addto.DEMAND_RESET:
      return {
        cartItems: [],
        
      };
    default:
      return state;
  }
};