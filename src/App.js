import React, { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOprtions';
import Statistics from './components/Statisctics/Statistics';
import Section from './components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  updateFeedbacks = data => {
    console.log(data);
    console.log(this.state.total);
    this.setState(prevState => {
      return {
        [data]: prevState[data] + 1,
        total: prevState.total + 1,
      };
    });
  };

  checkTotal = () => {
    if (this.state.total !== 0) {
      return false;
    }
    if (this.state.total === 0);
    {
      return true;
    }
  };
  // updatePositiveFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       [data]: prevState[data] + 1,
  //       total: prevState.total + 1,
  //     };
  //   });
  // };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.updateFeedbacks}
            />
          }
        ></Section>

        <Section
          title="Statistics"
          checkTotal={this.checkTotal}
          children={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          }
        ></Section>
      </>
    );
  }
}

export default App;

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// state = {
//   todos: initialTodos,
//   filter: '',
// };

// addTodo = text => {
//   const todo = {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   };

//   this.setState(({ todos }) => ({
//     todos: [todo, ...todos],
//   }));
// };

// deleteTodo = todoId => {
//   this.setState(prevState => ({
//     todos: prevState.todos.filter(todo => todo.id !== todoId),
//   }));
// };

// toggleCompleted = todoId => {
//   // this.setState(prevState => ({
//   //   todos: prevState.todos.map(todo => {
//   //     if (todo.id === todoId) {
//   //       return {
//   //         ...todo,
//   //         completed: !todo.completed,
//   //       };
//   //     }

//   //     return todo;
//   //   }),
//   // }));

//   this.setState(({ todos }) => ({
//     todos: todos.map(todo =>
//       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
//     ),
//   }));
// };

// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleTodos = () => {
//   const { filter, todos } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter(todo =>
//     todo.text.toLowerCase().includes(normalizedFilter),
//   );
// };

// calculateCompletedTodos = () => {
//   const { todos } = this.state;

//   return todos.reduce(
//     (total, todo) => (todo.completed ? total + 1 : total),
//     0,
//   );
// };

// render() {
//   const { todos, filter } = this.state;
//   const totalTodoCount = todos.length;
//   const completedTodoCount = this.calculateCompletedTodos();
//   const visibleTodos = this.getVisibleTodos();

//   return (
//     <Container>
//       {/* TODO: вынести в отдельный компонент */}

//       <div>
//         <p>Всего заметок: {totalTodoCount}</p>
//         <p>Выполнено: {completedTodoCount}</p>
//       </div>

//       <TodoEditor onSubmit={this.addTodo} />

//       <Filter value={filter} onChange={this.changeFilter} />

//       <TodoList
//         todos={visibleTodos}
//         onDeleteTodo={this.deleteTodo}
//         onToggleCompleted={this.toggleCompleted}
//       />
//     </Container>
//   );
// }
