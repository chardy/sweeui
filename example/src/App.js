import React from "react";

import { Grid, Col, Button, Form, Fieldset, Input, Box } from "sweeui";

export default function App() {
  return (
    <div>
      <Grid noGutter>
        <Col fixed fixedSize="10" fixedXs="20" fullHeight fullHeightXsOff>
          <Box variant="card" margin="10px" radius="5px">
            Test
          </Box>
        </Col>
        <Col fixed fixedSize="max">
          <Box variant="card" margin="10px" radius="5px">
            Test 2
          </Box>
        </Col>
      </Grid>
      {/* <Button size="small">Button</Button>
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

      <Form>
        <Fieldset type="form-group">
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
        </Fieldset>
        <Fieldset type="action-group">
          <Button type="primary">Submit</Button>
        </Fieldset>
      </Form> */}
    </div>
  );
}
