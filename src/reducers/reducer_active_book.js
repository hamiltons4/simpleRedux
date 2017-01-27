// State argument is not application state, only the state 
// this reducer is responsible for
export default function(state = null, action) { // null case prevents undefined on startup before state is set
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state; 

}