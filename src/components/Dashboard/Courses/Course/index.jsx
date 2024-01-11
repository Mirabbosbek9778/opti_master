import React from "react";
import {
  Container,
  Lesson,
  LessonList,
  MainContent,
  SectionTitle,
  Sidebar,
  VideoFrame,
  VideoPlayer,
} from "./style";

import video1 from "../../../../assets/videos/1.mp4";
import video2 from "../../../../assets/videos/2.mp4";
import video3 from "../../../../assets/videos/3.mp4";
export default function Course() {
  const sections = [
    {
      title: "Section 1",
      lessons: [
        {
          id: 1,
          title: "Lesson 1.1",
          videoUrl: video1,
        },
        {
          id: 2,
          title: "Lesson 1.2",
          videoUrl: video2,
        },
        {
          id: 3,
          title: "Lesson 1.3",
          videoUrl: video1,
        },
      ],
    },
    {
      title: "Section 2",
      lessons: [
        {
          id: 4,
          title: "Lesson 2.1",
          videoUrl: video1,
        },
        {
          id: 5,
          title: "Lesson 2.2",
          videoUrl: video3,
        },
        {
          id: 6,
          title: "Lesson 2.3",
          videoUrl: video2,
        },
      ],
    },
  ];

  const [activeLesson, setActiveLesson] = React.useState(
    sections[0].lessons[0]
  );

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
  };

  return (
    <>
      <Container>
        <MainContent>
          <VideoPlayer>
            <VideoFrame src={activeLesson.videoUrl} controls muted autoPlay />
          </VideoPlayer>
          <h1>{activeLesson.title}</h1>
          <span>
            {activeLesson.title}
            {activeLesson.title}
            {activeLesson.title}
          </span>
          {/* <span className='section_title'>Section Test</span>
          <Questions type='1'>
            {questions?.map((i) => (
              <>
                <li>{i?.title}</li>
                <ul>
                  {i?.answers?.map((item) => (
                    <li>
                      <input type='radio' name='isCorrect' />
                      <input type='text' />
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </Questions> */}
        </MainContent>
        <Sidebar>
          {sections.map((section) => (
            <div key={section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              <LessonList>
                {section.lessons.map((lesson) => (
                  <Lesson
                    key={lesson.id}
                    isActive={activeLesson.id === lesson.id}
                    onClick={() => handleLessonClick(lesson)}
                  >
                    {lesson.title}
                  </Lesson>
                ))}
              </LessonList>
            </div>
          ))}
        </Sidebar>
      </Container>
    </>
  );
}
