import { React, useState, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");
    dispatch({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt("추가하는 이름");
    const title = prompt("추가하는 타이틀");
    dispatch({ type: "added", name, title });
  };
  const handleDelete = () => {
    const name = prompt("누구를 삭제하고 싶은가요?");
    dispatch({ type: "deleted", name });
  };
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
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </>
  );
}

const initialPerson = {
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
};
