import React, { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {}

const Editor = (props: Props) => {
    const [text, setText] = useState("");
    const dispatch = useTodoDispatch();

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    };
    return (
        <div>
            <input type="text" value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>추가</button>
        </div>
    );
};

export default Editor;
