import { React, useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "현화",
    title: "개발자",
    mentor: {
      name: "엘리",
      title: "시니어개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}

const obj = {
  name: "현화",
  title: "개발자",
  mentor: {
    name: "엘리",
    title: "시니어개발자",
  },
};

const name = "업데이트 이름";
const updateObj = {
  ...obj,
  mentor: {
    ...obj.mentor,
    name,
  },
};
