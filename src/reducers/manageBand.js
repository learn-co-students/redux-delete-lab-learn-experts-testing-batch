var id = 0;
export default function manageBand(state = {bands: []}, action){
  switch (action.type) {
    case 'ADD_BAND':
      id++;
      var band = {text: action.payload, id: id};
      var bands = [...state.bands, band];
      return Object.assign({}, state, {bands: bands});
    case "DELETE_BAND":
      var bands = [...state.bands];
      bands.splice(action.payload, 1);
      return Object.assign({}, state, {bands: bands});
    default:
      return state;
  }
}
