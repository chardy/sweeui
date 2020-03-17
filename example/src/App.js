import React from "react";

import { Button } from "sweeui";

export default function App() {
  return (
    <div>
      <Button size="small">Button</Button>
      <Button size="normal">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="large">Button</Button>
      <Button size="xlarge">Button</Button>
      <br />
      <br />
      <Button loading type="primary" size="small">
        Button
      </Button>
      <Button loading type="secondary" size="normal">
        Button
      </Button>
      <Button loading type="success" size="medium">
        Button
      </Button>
      <Button loading type="error" size="large">
        Button
      </Button>
      <Button loading type="warning" size="xlarge">
        Button
      </Button>
    </div>
  );
}
