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
                    <div>
                        {/* <label for="chk2"><input type="checkbox" id="chk2" name="chk2">체크박스2</label><br>
                        <label for="r2_1"><input type="radio" id="r2_1" name="r2" checked>라디오3</label> */}
                        <input 
                        type={type}
                        key={idx}
                        name={key}
                        id={key}
                        value={key}
                        onClick={() => changeHandler(key)}
                        checked={key === checkedId}/> &nbsp;{selectBoxObject[key]}
                    </div>
                )
            })}
        </div>
    );
}


export default SelectBox;