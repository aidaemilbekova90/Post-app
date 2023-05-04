import React from "react";
import classes from "./Input.module.css";

const MyInput= React.forwardRef((props,ref)=>{
  return (
    <div>
      <input {...props} className={classes.myInput} ref={ref} type="text" />
    </div>
  );
})

export default MyInput;
