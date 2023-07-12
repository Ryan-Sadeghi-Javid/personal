import React from 'react';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"

function Experience() {
  return (
    <div className='experince'> 
    
    <VerticalTimeline lineColor="#3e497a">
    
      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2019 - 2023"
      iconStyle={ {background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon />} 
      >

      <h3 className='vertical-timeline-element-title'>Thornhill Seconadry School, Thornhill, Ontario</h3>
      <p>High School Diploma</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className="vertical-timeline-element--education"
      date="2023 - 2028"
      iconStyle={ {background: "#3e497a", color: "#fff"}}
      icon={<SchoolIcon />} 
      >

      <h3 className='vertical-timeline-element-title'>University of Waterloo, Kitchener, Ontario</h3>
      <h4 className='vertical-timeline-element-subtitle'>Bachelor's Degree</h4>
      <p>Electrical Engineering</p>
      </VerticalTimelineElement>

    
    </VerticalTimeline>
    
    </div>
  )
}

export default Experience