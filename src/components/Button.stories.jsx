import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Button",
  component: Button,
};

const events = actions({ onClick: "clicked" });

const ToolBar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <ToolBar>
      <Button {...events}>Default</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="danger" {...events}>
        Danger
      </Button>
    </ToolBar>

    <p>Disabled:</p>
    <ToolBar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button color="primary" disabled {...events}>
        Primary
      </Button>
      <Button color="danger" disabled {...events}>
        Danger
      </Button>
    </ToolBar>
  </div>
);
