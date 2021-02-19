import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className="tasks-wrapper">
            {tasks.sort((a,b) => a.text.localeCompare(b.text, 'en', {'sensitivity': 'base'})).map((task, index) => (
                <Task key={index} task={task} onDelete=
                {onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks
