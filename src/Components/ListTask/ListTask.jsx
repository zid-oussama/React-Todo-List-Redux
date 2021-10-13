import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Task from "../Task/Task";

import "./ListTask.css";

function ListTask() {
    const state = useSelector((state) => state);
    const [myState, setmyState] = useState(state);
    useEffect(() => {
        setmyState(state);
    }, [state]);

    return (
        <div className="listTask">
            <div className="btns">
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        setmyState(state);
                    }}
                >
                    ALL
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        setmyState(state.filter((el) => el.Done === true));
                    }}
                >
                    COMPLETED
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                        e.preventDefault();
                        setmyState(state.filter((el) => el.Done === false));
                    }}
                >
                    UNCOMPLETED
                </motion.button>
            </div>
            <div className="myList">
                {myState.map((tsk) => {
                    return (
                        <Task
                            key={tsk.id}
                            id={tsk.id}
                            task={tsk.task}
                            done={tsk.Done}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ListTask;
