import "./SideBar.css";

function SideBar(props) {
  const frame = props.frame;
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={props.profile_img} alt="avatar"/>
        <p className="text p-pale">Report for</p>
        <p className="username f-name">{props.first_name}</p>
        <p className="username l-name">{props.last_name}</p>
      </div>
      <nav className="nav">
        <a
          className={frame !== 0 ? "nav-link" : "nav-link active"}
          onClick={() => {
            props.handler(0);
          }}
        >
          Daily
        </a>
        <a
          className={frame !== 1 ? "nav-link" : "nav-link active"}
          onClick={() => {
            props.handler(1);
          }}
        >
          Weekly
        </a>
        <a
          className={frame !== 2 ? "nav-link" : "nav-link active"}
          onClick={() => {
            props.handler(2);
          }}
        >
          Monthly
        </a>
      </nav>
    </div>
  );
}
export default SideBar;
