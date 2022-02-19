import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function TextFieldWrapper(props) {
  return (
    <Box {...props.box}>
      <TextField {...props.textField} />
    </Box>
  );
}

export default TextFieldWrapper;
