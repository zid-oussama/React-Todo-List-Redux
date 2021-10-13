import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../_Redux/Actions";
import "./AddTask.css";

function AddTask() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [userInput, setuserInput] = useState("");

    const inputText = (e) => {
        setuserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userInput.trim()) {
            if (
                state.filter((el) => el.task === userInput.trim()).length === 0
            ) {
                dispatch(add(userInput));
                setuserInput("");
                e.target.reset();
            } else {
                alert("your task already added");
            }
        }
    };

    return (
        <div className="addtask">
            <h1>My TODO List</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={inputText}
                    placeholder="ENTER YOUR TASK"
                />
                <button type="submit" style={{ cursor: "pointer" }}>
                    <i type="submit" className="fad fa-plus-square"></i>
                </button>
            </form>
        </div>
    );
}

export default AddTask;
