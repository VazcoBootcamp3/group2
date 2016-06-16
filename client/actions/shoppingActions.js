export function addShopping(shoppingForm) {
  return {type: 'ADD_SHOPPING', shoppingForm};
}

export function loadShoppingSuccess() {
  return {type: 'LOAD_SHOPPING_SUCCESS'};
}

export function loadShopping() {
  return dispatch => {
    dispatch(loadShoppingSuccess());
  };
}

export function deleteShopping(id) {
  return {type: 'DELETE_SHOPPING', id}
}
