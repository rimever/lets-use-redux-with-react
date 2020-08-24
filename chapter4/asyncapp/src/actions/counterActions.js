export function increment() {
    return dispatch => {
        setTimeout(() => {
            dispatch({type:"INCREMENT"});
        },2000);
    }
}
export function decrement() {
    return {type:"DECREMENT"};
}