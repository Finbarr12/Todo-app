import React, { useState } from "react";
import styled from "styled-components";
import todo from "./Assets/Todo.avif";
interface iTodo {
  task: string;
  id: number;
  status: boolean;
  Time: string;
  Date: string;
  completed: boolean;
}
const TodoList = () => {
  const [Todo, SetTodo] = useState("");
  const [TodoEditing, SetTodoEditing] = useState<any>();
  const [EditText, SetEditText] = useState("");
  const [Time, SetTime] = useState("");
  const [Date, SetDate] = useState("");
  const [edit, SetEdit] = useState(-1);
  const [show, Setshow] = useState(false);
  const [data, SetData] = useState<iTodo[]>([
  ]);
  const localStorage = JSON.parse(
    window.localStorage.getItem("TodoItem") || ""
  );

  const dis = () => {
    Setshow(!show);
  };
  const rand = Math.floor(Math.random() * 30000) + 40000;

  const AddData = () => {
    SetData((prev) => [
      ...prev,
      {
        id: rand,
        task: Todo,
        status: false,
        Time: Time,
        Date: Date,
        completed: false,
      },
    ]);
  };

  const RemoveData = (id: number) => {
    SetData(data.filter((el) => el.id !== id));
  };

  const changeValue = (id: number) => {
    SetEdit(id);
  };

  const submitEdits = (id: number) => {
    const updatedTodos = [...data].map((todo) => {
      if (todo.id === id) {
        todo.task = EditText;
      }
      return todo;
    });
    SetData(updatedTodos);
    SetTodoEditing(null);
  };

  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Welcome {localStorage.toUpperCase()}</h2>
        <p>Create a task!!! Let's do this✨</p>
        <InputField
          onChange={(e) => {
            SetTodo(e.target.value);
          }}
          placeholder="Enter your Task"
        />
        <Main>
          <span>Set Time to start: </span>{" "}
          <input
            onChange={(e) => {
              SetTime(e.target.value);
            }}
            type="time"
          />
          <span>Set Date to begin:</span>{" "}
          <input
            onChange={(e) => {
              SetDate(e.target.value);
            }}
            type="date"
          />
        </Main>
        {Todo !== "" && Time !== "" && Date !== "" ? (
          <Button onClick={AddData} bg="orangered" tr="scale(0.99)">
            Submit
          </Button>
        ) : (
          <Button disabled bg="silver" tr="">
            Submit
          </Button>
        )}
        <br />
        <br />
        <br />
        <Hold>
          {data?.map((props) => (
            <Card>
              {props.id === TodoEditing ? (
                <Held>
                  <input
                    defaultValue={props.task}
                    onChange={(e) => {
                      SetEditText(e.target.value);
                    }}
                    type="text"
                  />
                </Held>
              ) : (
                <Holder>
                  <h3>{props.task}</h3>
                  <h4>{props.Date}</h4>
                </Holder>
              )}

              <ButHold>
                {props.id === TodoEditing ? (
                  <button onClick={() => submitEdits(props.id)}>Update</button>
                ) : (
                  <button onClick={() => SetTodoEditing(props.id)}>Edit</button>
                )}
                <button>Done</button>
                <button
                  onClick={() => {
                    RemoveData(props.id);
                  }}
                >
                  Delete
                </button>
              </ButHold>
              <h5>Time: {props.Time}</h5>
            </Card>
          ))}
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default TodoList;

const MainH = styled.div``;

const Held = styled.div`
  display: flex;

  button {
    height: 30px;
  }
  input {
    margin-top: 3px;
  }
`;

const Main = styled.div`
  display: flex;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    width: 75%;
    display: block;
    font-size: 14px;
  }

  input {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButHold = styled.div`
  button {
    width: 90px;
    height: 40px;
    margin-right: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    display: flex;
  }
`;
const Card = styled.div`
  width: 350px;
  height: 130px;
  background-color: white;
  padding: 20px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media screen and (max-width: 500px) {
    width: 80%;
    padding: 15px;
  }

  h3 {
    font-weight: 600;
  }
  input {
    width: 80%;
    height: 19px;
    outline: 0;
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  backdrop-filter: blur(5px);

  h2 {
    @media screen and (max-width: 500px) {
      font-size: 10px;
      text-align: center;
    }
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  /* background-image: url(${todo}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  h2 {
    margin: 0%;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: 19px;
    margin-bottom: 25px;
  }
`;
const InputField = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 30px;
  border: 0;
  outline: none;
  padding-left: 20px;

  @media screen and (max-width: 500px) {
    width: 90%;
  }

  ::placeholder {
    font-size: 17px;
  }
`;
const Button = styled.button<{ bg: string; tr: string }>`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  background-color: ${({ bg }) => bg};
  margin-top: 20px;
  font-size: 19px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 80%;
  }

  :hover {
    transform: ${({ tr }) => tr};
    transition: all 350ms;
  }
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
