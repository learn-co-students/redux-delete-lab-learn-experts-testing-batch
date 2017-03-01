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
      for (var i = 0; i < bands.length; i++) {
        if (bands[i].id == action.id) {
          bands.splice(i, 1);
        }
      }
      console.log(bands.length)
      return Object.assign({}, state, {bands: bands});
    default:
      return state;
  }
}
