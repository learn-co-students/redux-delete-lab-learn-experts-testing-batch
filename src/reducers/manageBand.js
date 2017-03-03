var id = 0
export default function manageBand(state = {bands: []}, action){
  switch (action.type) {
    case 'ADD_BAND':
      id++
      return Object.assign(state, {}, {bands: state.bands.concat({text: action.payload, id: id})})
    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(band => action.id !== band.id)}
    default:
      return state;
  }
}
