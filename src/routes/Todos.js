import React from 'react';
import { connect } from 'dva';
import { List, Card } from 'antd';
import styles from './Todos.css';

function Todos({ todos }) {
  return (
    <div className={styles.normal}>
      <Card title="Todo list" bordered={false}>
        <List
          bordered
          dataSource={todos.map(todo => todo.title)}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos,
  };
}

export default connect(mapStateToProps)(Todos);
