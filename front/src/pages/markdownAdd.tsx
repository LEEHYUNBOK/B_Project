import React, { useState } from 'react'
import MDEditor from "@uiw/react-md-editor";
import styled from "@emotion/styled";

function MarkDownAdd() {
    const [value, setValue] = useState<string>();
    return (
    <MDArea>
      <MDEditor height={`70vh`} highlightEnable={false} value={value} onChange={setValue}/>
    </MDArea>
    )
}

export default MarkDownAdd

const MDArea = styled.div`
    width: 90%;
    margin: 0px auto;
` 