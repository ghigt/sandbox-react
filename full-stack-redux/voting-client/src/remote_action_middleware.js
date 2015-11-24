
// Same as:
//   export default function(socket) {
//     return function(store) {
//       return function(next) {
//         return function(action) {
//           ...
//         }}}}
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}