import { EXAMPLE_ACTION } from '../actions/types';

export default function(state =[], action) {
	switch (action.type) {
		case EXAMPLE_ACTION:
		console.log('action payload', action.payload)
			return [...state, ...action.payload];

	}
	return state;
}