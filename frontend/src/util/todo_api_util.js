export const fetchTodos = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/todos'
    });
};


export const createTodo = todo => {
    return $.ajax({
        method: 'POST',
        url: 'api/todos',
        data: {
            todo
        }
    });
};



export const deleteTodo = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/todos/${id}`
    });
};  


export const updateTodo = todo => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/todos/${todo.id}`,
        data: { todo }      
    });
};