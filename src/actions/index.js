export function setWishItem(state, payload) {
  if (!payload.isFavorite) {
    payload.isFavorite = true;
    state.myWishList = [...state.myWishList, payload];
    state.productList = state.productList.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          isFavorite: true
        };
      }
      return {
        ...item
      };
    });
  } else {
    state.myWishList = state.myWishList.filter(item => item.id !== payload.id);
    state.productList = state.productList.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          isFavorite: false
        };
      }
      return {
        ...item
      };
    });
  }
}
