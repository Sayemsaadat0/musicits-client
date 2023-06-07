import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
const OurHistory = () => {
    return (
        <div >
            <SectionTitle title1={'Know Our Story: Inspiring Passion for'} title2={'Music Education'} subtitle={'Driven by our love for music and a desire to make quality instruction available to everyone, we embarked on a journey to build a platform that would revolutionize the way people learn music.'}></SectionTitle>
            <VerticalTimeline>
                <VerticalTimelineElement >
                    <div className="card shadow-xl">
                        <div className="card-body">
                            <h1>Music schools have a rich history that dates back many centuries. The concept of formal music education can be traced back to ancient civilizations such as ancient Egypt, Greece, and China, where music was considered an essential part of education and cultural development..</h1>
                        </div>
                     <img src="https://i.pinimg.com/564x/15/09/96/150996d5036e9230edc3fc48decaecd4.jpg" alt="" />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work">
                    <div className="card shadow-xl">
                        <div className="card-body">
                            <h1>Music schools have a rich history that dates back many centuries. The concept of formal music education can be traced back to ancient civilizations such as ancient Egypt, Greece, and China, where music was considered an essential part of education and cultural development..</h1>
                        </div>
                        <img src="https://i.pinimg.com/564x/ec/88/70/ec8870ed9557cfefb90593e8fc6f8659.jpg" alt="" />
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement>
                   
                    <div className="card shadow-xl">
                        <div className="card-body">
                            <h1>Music schools have a rich history that dates back many centuries. The concept of formal music education can be traced back to ancient civilizations such as ancient Egypt, Greece, and China, where music was considered an essential part of education and cultural development..</h1>
                        </div>
                        <img src="https://i.pinimg.com/564x/7a/80/91/7a80916815572f4f49ecd6225a1f837b.jpg" alt="" />
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education">
                  
                    <div className="card shadow-xl">
                        <div className="card-body">
                            <h1>Music schools have a rich history that dates back many centuries. The concept of formal music education can be traced back to ancient civilizations such as ancient Egypt, Greece, and China, where music was considered an essential part of education and cultural development..</h1>
                        </div>
                        <img src="https://i.pinimg.com/564x/5e/d7/67/5ed767df41d14227386fa440d25dec78.jpg" alt="" />
                    </div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    );
};

export default OurHistory;