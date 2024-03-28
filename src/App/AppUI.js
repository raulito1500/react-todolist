import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Loading } from '../Loading'
import { Error } from '../Error'
import { EmptyState } from '../EmptyState'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    return (
        // <React.Fragment>
        <>
            <div className='left'>
                <img alt="logo" src="./842dd8e5-9505-46ed-be4b-a073a5963dd6.jpeg" />
            </div>
            <div className='right'>
                <TodoCounter />
                <TodoSearch />
                <CreateTodoButton />
                {/*  Esta es una alternativa vieja al useContext */}
                <TodoContext.Consumer>
                    {({
                        loading,
                        error,
                        filteredTodos,
                        completeTodo,
                        deleteTodo
                    }) => (
                        <TodoList>
                            {loading && <Loading />}
                            {error && <Error />}
                            {(!loading && filteredTodos.length === 0) && <EmptyState />}

                            {filteredTodos.map((todo, index) => (
                                <TodoItem
                                    key={index}
                                    todo={todo}
                                    onComplete={() => completeTodo(index)}
                                    onDelete={() => deleteTodo(index)} />
                            ))}
                        </TodoList>
                    )}
                </TodoContext.Consumer>

                <Modal>
                    <TodoForm />
                </Modal>

            </div>
        </>
    )
}

export { AppUI }