import React from "react"; 

const SelectBox = ({
    className,

}) => {
    return (
        <div className={className}>
            {Object.keys(selectBoxObject).map((key, idx) => {
            return (
                    <>
                        <input
                            key={idx}
                            name={key}
                            value={key}
                            /> 
                    </>
                )
        </div>
    );
}


export default SelectBox;