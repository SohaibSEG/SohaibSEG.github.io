import "./Tracker.css"
function Tracker(props){
    return (
        <div className= {"tracker " + props.className}>
            <header className="tracker-header">
                <img src={props.icon_src} alt={props.className}></img>
            </header>
            <main className="tracker-body">
                <div className="tracker-title">
                    <p>{props.title}</p>
                    <img src="/images/icon-ellipsis.svg"></img>
                </div>
                <p className="tracker-time">{props.time}hrs</p>
                <p className="tracker-prev-frame">{`Last ${props.frame} - ${props.prev}`}hrs</p>
            </main>
        </div>
    );
}
export default Tracker;