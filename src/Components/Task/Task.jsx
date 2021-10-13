import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { complete, del, edit } from "../_Redux/Actions";

import "./Task.css";

function Task({ id, task, done }) {
    const [Edit, setEdit] = useState(false);
    const [userEdit, setuserEdit] = useState("");
    const dispatch = useDispatch();
    const handleDone = (e) => {
        e.preventDefault();
        dispatch(complete(id));
    };
    const handleDel = (e) => {
        e.preventDefault();
        dispatch(del(id));
    };
    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(!Edit);
    };
    const acceptEdit = (e) => {
        e.preventDefault();
        dispatch(edit({ id: id, task: userEdit }));
        setEdit(!Edit);
    };

    return (
        <div className="task">
            {done ? (
                <div>
                    <h3 style={{ color: "red" }}>
                        <del>{task}</del>
                    </h3>
                    <div className="task_btns">
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: "pointer" }}
                            onClick={handleDone}
                        >
                            <i className="fas fa-times"></i>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: "pointer" }}
                            onClick={handleEdit}
                        >
                            <i className="fas fa-pencil-alt"></i>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: "pointer" }}
                            onClick={handleDel}
                        >
                            {" "}
                            <i className="far fa-trash-alt"></i>
                        </motion.button>
                    </div>
                </div>
            ) : (
                <div>
                    <h3>{task}</h3>
                    <div className="task_btns">
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: "pointer" }}
                            onClick={handleDone}
                        >
                            <i className="fas fa-check"></i>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: "pointer" }}
                            onClick={handleEdit}
                        >
                            <i className="fas fa-pencil-alt"></i>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: "pointer" }}
                            onClick={handleDel}
                        >
                            {" "}
                            <i className="far fa-trash-alt"></i>
                        </motion.button>
                    </div>
                </div>
            )}

            {Edit ? (
                <div className="edit">
                    <form action="" onSubmit={acceptEdit}>
                        <input
                            style={{ paddingLeft: "10px" }}
                            type="text"
                            placeholder="EDIT HERE"
                            onChange={(e) => setuserEdit(e.target.value)}
                        />
                        <div className="edit_btns">
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ cursor: "pointer" }}
                                type="submit"
                            >
                                Edit
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ cursor: "pointer" }}
                                onClick={handleEdit}
                            >
                                Cancel
                            </motion.button>
                        </div>
                    </form>
                </div>
            ) : null}
        </div>
    );
}

export default Task;
