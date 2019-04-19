export default(state=1,action) => {
    let { type } = action;
    switch(type){
        case 'ADD':
        return state + 1;
        case 'MINUS':
        return state - 1;
        case 'ADDASNUM':
        return state + action.num;
        default:
        return state;
    }
}