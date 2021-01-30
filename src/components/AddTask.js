import React from "react"

const AddTask = ({ onAddTask }) => {
const [text, setText] = React.useState("")
const [day, setDay] = React.useState("")
const [reminder, setReminder] = React.useState(false)

const onSubmit = e => {
    e.preventDefault()

    if(!text) {
        alert("Please add a task")
        return
    }

    onAddTask({ text, day, reminder})

    setText("")
    setDay("")
    setReminder(false)
}

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input checked={reminder} type="checkbox" value={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
            </div>
            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask
