import { React, useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: "현화",
    title: "개발자",
    mentors: [
      {
        id: 1,
        name: "밥",
        title: "시니어 개발자",
      },
      {
        id: 2,
        name: "제임스",
        title: "시니어 개발자",
      },
    ],
  });
  return (
    <>
      <h3>
        {person.name}는 {person.title}
      </h3>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} {mentor.title}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
          const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }

              return mentor;
            }),
          }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt("추가하는 이름");
          const title = prompt("추가하는 타이틀");

          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt("누구를 삭제하고 싶은가요?");
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((m) => m.name !== name),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </>
  );
}
