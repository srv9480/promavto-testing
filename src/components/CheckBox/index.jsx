import React, { useState } from "react";
import './styles.css';

export default function Check() {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
    };
    return (
        <div className="check-box">
            <h1>Чек бокс</h1>
            <div className="check-box__flex-container">
                <Checkbox
                    label="Значение 1"
                    value={checkedOne}
                    onChange={handleChangeOne}
                    styles={{cursor: 'pointer'}}
                />
                <Checkbox
                    label="Значение 2"
                    value={checkedTwo}
                    onChange={handleChangeTwo}
                />
            </div>
        </div>
    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};
