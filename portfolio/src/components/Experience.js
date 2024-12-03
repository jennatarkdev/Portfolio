import "animate.css";
import { Timeline } from "./TimelineComp";

export const Experience = () => {
  let workIconStyles = { background: "#06D6A0" , height: '10px'};
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <section className="experience" id="experience">
      <div className="container">
          <div className = "experience-bx">
            <Timeline />            
          </div>
        </div> 
      </section>
  );
};
