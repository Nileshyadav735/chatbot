import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ChatBot from "react-simple-chatbot";

const App = () => {
  return (
    <ChatBot
      steps={[
        {
          id: "1",
          message: "What is your name?",
          trigger: "name",
        },
        {
          id: "name",
          user: true,
          trigger: "start",
        },
        {
          id: "start",
          message: "Hi {previousValue}! What do you wanna Know?",
          trigger: "college",
        },
        {
          id: "college",
          options: [
            {
              value: "Curriculars",
              label: "Curriculars",
              trigger: "CURRICULAR",
            },
            {
              value: "Extra-Curriculars",
              label: " Extra-Curriculars",
              trigger: "Extra-Curriculars",
            },
            {
              value: "Administrative",
              label: "Administrative",
              trigger: "Administrative",
            },
            {
              value: "Examination",
              label: "Examination",
              trigger: "Examination",
            },
            {
              value: "Placements",
              label: "Placements",
              trigger: "Placements",
            },
            {
              value: "More",
              label: "More",
              trigger: "More",
            },
          ],
        },
        {
          id: "CURRICULAR",
          options: [
            {
              value: "Moodle",
              label: "Moodle",
              trigger: "Moodle",
            },
            {
              value: "Academic Calendar",
              label: "Academic Calendar",
              trigger: "Academic Calendar",
            },
            {
              value: "Syllabus",
              label: "Syllabus",
              trigger: "Syllabus",
            },
          ],
        },
        {
          id: "Moodle",
          message:
            "The link to Moodle 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Academic Calendar",
          message:
            "The link to Calendar 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Syllabus",
          message:
            "The link to Syllabus 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },

        {
          id: "Extra-Curriculars",
          options: [
            {
              value: "Events",
              label: "Events",
              trigger: "Events",
            },
            {
              value: "Student Chapters",
              label: "Student Chapters",
              trigger: "Student Chapters",
            },
            {
              value: "Student's Council",
              label: "Student's Council",
              trigger: "Student's Council",
            },
          ],
        },

        {
          id: "Events",
          message:
            "The link to Events 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Student Chapters",
          message:
            "The link to Student Chapters 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Student's Council",
          message:
            "The link to Student's Council 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },

        {
          id: "Administrative",
          options: [
            {
              value: "Students Portal",
              label: "Students Portal",
              trigger: "Students Portal",
            },
            {
              value: "Notices",
              label: "Notices",
              trigger: "Student Chapters",
            },
          ],
        },

        {
          id: "Students Portal",
          message:
            "The link to Students Portal 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Notices",
          message:
            "The link to Notices 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },

        {
          id: "Examination",
          options: [
            {
              value: "Notices",
              label: "Notices",
              trigger: "Notices",
            },
            {
              value: "Examination Process",
              label: "Examination Process",
              trigger: "Examination Process",
            },
            {
              value: "Question Paper Archive",
              label: "Question Paper Archive",
              trigger: "Question Paper Archive",
            },
          ],
        },

        {
          id: "Notices",
          message:
            "The link to Notices 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Examination Process",
          message:
            "The link to Examination Process 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Question Paper Archive",
          message:
            "The link to Question Paper Archive 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Placements",
          options: [
            {
              value: "Our Recruiters",
              label: "Our Recruiters",
              trigger: "Our Recruiters",
            },
            {
              value: "Placement Statistics",
              label: "Placement Statistics",
              trigger: "Placement Statistics",
            },
          ],
        },

        {
          id: "Our Recruiters",
          message:
            "The link to Recruiters 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "Placement Statistics",
          message:
            "The link to Placement 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },

        {
          id: "More",
          options: [
            {
              value: "PORTALS & ADMINISTRATION",
              label: "PORTALS & ADMINISTRATION",
              trigger: "PORTALS & ADMINISTRATION",
            },
            {
              value: "CHANGE PERSONAL DETAILS",
              label: "CHANGE PERSONAL DETAILS",
              trigger: "CHANGE PERSONAL DETAILS",
            },
            {
              value: "ABOUT US",
              label: "ABOUT US",
              trigger: "ABOUT US",
            },
          ],
        },

        {
          id: "PORTALS & ADMINISTRATION",
          message:
            "The link to ADMINISTRATION 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "CHANGE PERSONAL DETAILS",
          message:
            "Link to Site Login  👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "ABOUT US",
          message:
            "The link to ABOUT US 👉'http://www.frcrce.ac.in/index.php/students/crce-notices/110-examsection'",
          trigger: "3",
        },
        {
          id: "3",
          options: [
            { value: "yes", label: "Continue", trigger: "start" },
            { value: "no", label: "Exit", trigger: "end-message" },
          ],
        },
        {
          id: "end-message",
          message: "Thanks! Have a great day,starting new conversation ",
          trigger: "start",
        },
      ]}
    />
  );
};

export default App;
