import {useState, useEffect, useCallback} from 'react';
import {api} from '../apis/api';

export const useTodoService = () => {
    const [todos, setTodos] = useState([]);

    const loadTodos = useCallback(async () => {
        try {
            const {data} = await api.get('/todos');
            setTodos(data);
        } catch (err) {
            console.error('加载todos失败:', err);
        }
    }, []);

    const addTodo = async (todo) => {
        try {
            await api.post('/todos', todo);
            await loadTodos();
        } catch (err) {
            console.error('添加todo失败:', err);
        }
    }

    const removeTodo = async (id) => {
        try {
            await api.delete(`/todos/${id}`);
            await loadTodos();
        } catch (err) {
            console.error('删除todo失败:', err);
        }
    }

    const updateTodo = async (id, todo) => {
        try {
            await api.put(`/todos/${id}`, todo);
            await loadTodos();
        } catch (err) {
            console.error('更新todo失败:', err);
        }
    }

    useEffect(() => {
        loadTodos();
    }, [loadTodos]);

    return {
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        loadTodos
    };
};
