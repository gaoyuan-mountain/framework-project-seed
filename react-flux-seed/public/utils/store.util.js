import { each, isFunction } from 'lodash';
import { EventEmitter } from 'events';
import shallowEqual from 'react-pure-render/shallowEqual';

const CHANGE_EVENT = 'change';

export function createStore(spec) {
	const emitter = new EventEmitter();

	const store = Object.assign({
		emitChange() {
			emitter.emit(CHANGE_EVENT);
		},

		addChangeListener(callback) {
			emitter.on(CHANGE_EVENT, callback);
		},

		removeChangeListener(callback) {
			emitter.removeListener(CHANGE_EVENT, callback);
		}
	}, spec);

	each(store, (val, key) => {
		if (isFunction(val)) {
			store[key] = store[key].bind(store);
		}
	});

	return store;
};