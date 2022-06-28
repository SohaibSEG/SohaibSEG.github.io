import "./App.css";
import DashboardContainer from "./dashboardContainer/DashboardContainer";
import Data from "./data";
import SideBar from "./sideBar/SideBar";
import Tracker from "./trackerComponent/Tracker.js";
import {useState} from 'react';
function App() {
  const data = Data();
  const frames = [
    {
      key : "daily",
      frame : "Day"
    },
    
    {
      key : "weekly",
      frame : "Week"
    },
    
    {
      key : "monthly",
      frame : "Month"
    }
  ];
  const [f,setFrame] = useState(0);
  return (
    <div className="App">
      <DashboardContainer>
        <SideBar
          frame = {f}
          first_name="Jeremy"
          last_name="Robson"
          profile_img="/images/image-jeremy.png"
          handler = {setFrame}
        ></SideBar>
        {data.map((e,i) => {
          const clsName = e.title.toLowerCase().replace(" ","-");
          return (
            <Tracker
              key={i}
              className={clsName}
              icon_src={`/images/icon-${clsName}.svg`}
              title={e.title}
              time={e.timeframes[frames[f].key].current}
              frame={frames[f].frame}
              prev={e.timeframes[frames[f].key].previous}
            ></Tracker>
          );
        })}
      </DashboardContainer>
    </div>
  );
}

export default App;
