import React from "react";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Button",
  component: Button,
};

const ToolBar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <ToolBar>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="danger">Danger</Button>
  </ToolBar>
);
