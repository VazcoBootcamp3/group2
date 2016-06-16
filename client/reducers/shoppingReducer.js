

const initialState = [{id: 1, buyer: 'Filip', productList: 'masło', amount: '100', owner: 'Maciek'}];

export default function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SHOPPING':
      let id = state.reduce((maxId, elem) => Math.max(elem.id, maxId), -1) + 1;
      action.shoppingForm.id = id;
      return [...state, Object.assign({},action.shoppingForm)];

    case 'LOAD_SHOPPING_SUCCESS':
    return state;

    case 'DELETE_SHOPPING':
      return state.filter(elem =>
          elem.id !== action.id
      );


    default:
      return state;

  }

}
