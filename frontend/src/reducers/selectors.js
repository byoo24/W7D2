export function allTodos(state) {
    const newArray = Object.keys(state.todos)
    .map( id => state.todos[id]);
    return newArray;
}