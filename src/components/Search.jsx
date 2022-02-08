import React, { Component, useRef, useState } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import "../bootstrap.scss";

export default (props) => {
  const [textInput, setTextInput] = useState("");
  const onChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <InputGroup className="margin-top">
      <Input name="search" onChange={onChange} value={textInput} />
      <Button onClick={() => props.onSearch(textInput)}>search city</Button>
    </InputGroup>
  );
};
