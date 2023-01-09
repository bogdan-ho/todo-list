import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';

import { actions as filterInfoActions, filterInfoSelector } from '../slices/filterInfoSlice';
import { actions as tasksActions, selectCompletedTasks, selectActiveTasks } from '../slices/tasksSlice';

const Footer = () => {
  const completedTasks = useSelector(selectCompletedTasks);
  const activeTasks = useSelector(selectActiveTasks);

  const { nowShowing } = useSelector(filterInfoSelector);
  const dispatch = useDispatch();

  const handleShowAll = () => {
    dispatch(filterInfoActions.showAll());
  };
  const handleShowActive = () => {
    dispatch(filterInfoActions.showActive());
  };
  const handleShowCompleted = () => {
    dispatch(filterInfoActions.showCompleted());
  };
  const handleClearCompletedTasks = () => {
    const completedTasksIds = completedTasks.map((task) => task.id);
    dispatch(tasksActions.removeAllCompleted(completedTasksIds));
  };

  return (
    <div className="w-50 bg-white border rounded p-2 mt-1 d-flex justify-content-between align-items-center">
      <span className="p-1 text-secondary">
        {activeTasks.length}
        {' '}
        <small>items left</small>
      </span>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-link" className="text-secondary" size="sm" active={nowShowing === 'all'} onClick={handleShowAll}>All</Button>
        <Button variant="outline-link" className="text-secondary" size="sm" active={nowShowing === 'active'} onClick={handleShowActive}>Active</Button>
        <Button variant="outline-link" className="text-secondary" size="sm" active={nowShowing === 'completed'} onClick={handleShowCompleted}>Completed</Button>
      </ButtonGroup>
      <Button variant="outline-link" className="text-secondary" size="sm" onClick={handleClearCompletedTasks}>Clear completed</Button>
    </div>
  );
};

export default Footer;
