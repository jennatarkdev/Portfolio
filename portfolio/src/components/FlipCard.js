import React, { useState } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export const FlipCard = ({ title, position, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>{title}</h2>
              <h5>{position}</h5>
            </div>
            <div className="flip-card-back">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};
