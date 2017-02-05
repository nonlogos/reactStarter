import { EXAMPLE_ACTION } from './types';

export function exampleAction() {
	return {
		type: EXAMPLE_ACTION,
		payload: ['redux', 'is', 'working'] 
	}
}