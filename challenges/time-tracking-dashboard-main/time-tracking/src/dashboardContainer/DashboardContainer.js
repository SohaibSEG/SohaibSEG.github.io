import "./DashboardContainer.css"

function DashboardContainer(props){
    return (
        <div className="dashboard">
            {props.children}
        </div>
    )
}
export default DashboardContainer;