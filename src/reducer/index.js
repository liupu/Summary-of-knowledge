export default (state = { num: 0 }, action) => {
    let { type } = action;
    switch (type) {
        case 'ADD':
            return { ...state, num: state.num + 1 };
        case 'MINUS':
            return { ...state, num: state.num - 1 > 0 ? state.num - 1 : 0};
        case 'ADDASNUM':
            return { ...state, num: state.num + action.number };
        default:
        return state;
    }
}