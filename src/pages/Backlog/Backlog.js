import Task from "../../task/Task";
import useDataFetching from "../../Hooks/useDataFetching";
import './Backlog.css';

export default function Backlog () {
    const [loading, error, tasks] = useDataFetching("https://my-json-server.typicode.com/PacktPublishing/React-Projects-Second-Edition/tasks");

    return ( 
        <div className="Backlog-wrapper">
            <h2>Backlog</h2>
            <div className="Tasks-wrapepr">
                {loading || error? (
                    <span>{error || 'Loading...'}</span>
                ) : (
                    tasks.map((task) => (
                        <Task
                        Key = {task.id} 
                        title = {task.title}
                        body = {task.body}
                        />
                    ))
                )}
            </div>
        </div>
    )
}