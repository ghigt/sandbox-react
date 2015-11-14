import Server from 'socket.io';

export default function startServer(store) {
	const io = new Server().attach(8090);

	store.subscribe(() => {
			console.log('new suscribtion'); // Debug
			io.emit('state', store.getState().toJS());
		}
	);

	io.on('connection', (socket) => {
		console.log('new connection'); // Debug
		socket.emit('state', store.getState().toJS());
		// Here should have sort of firewall or authentication mechanism
		// to do not allow any client to broadcast events.
		socket.on('action', store.dispatch.bind(store));
	});
}
