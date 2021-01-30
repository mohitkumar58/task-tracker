import React from 'react';
import AddTask from './components/AddTask';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = React.useState([
    {
        id: 1,
        text: "Doctor Appointment",
        day: "Feb 5th at 3:00 pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Office Meeting",
        day: "Jan 30th at 7:00 pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 1st at 11:00 am",
        reminder: false,
    }
])

const deleteTask = id => {
  console.log("Delete Task", id)
  setTasks(tasks.filter(task => task.id !== id))
}

const toggleReminder = id => {
  console.log("Reminder", id)
  setTasks(
    tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder} : task)
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length === 0 ? "No tasks remaining yet" : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
}

export default App;
