import React from "react"; 

const SelectBox = ({
    type,
    className,
    checkedId,
    changeHandler,
    selectBoxObject
}) => {

    return (
        <div className={className}>
            {Object.keys(selectBoxObject).map((key, idx) => {
                return (
                    <>
                        <input
                            type={type}
                            key={idx}
                            name={key}
                            value={key}
                            onClick={() => changeHandler(key)}
                            checked={key === checkedId}/> {selectBoxObject[key]}
                    </>
                )
            })}
        </div>
    );
}


export default SelectBox;