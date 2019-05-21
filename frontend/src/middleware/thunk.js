const thunk = ({ dispatch, getState }) => {
    return (next) => {
        return (action) => {
            if (typeof action === 'function'){
                return action(dispatch, getState);
            } else {
                return next(action);
            }
        };
    };
};

export default thunk;