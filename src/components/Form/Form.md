Basic Form:

```jsx
<Form>
  <Fieldset>
    <Input placeholder="Username" />{" "}
    <Input placeholder="Password" type="password" />{" "}
    <Button type="primary">Submit</Button>
  </Fieldset>
</Form>
```

Form Stacked:

```jsx
<Form type="stacked">
  <Fieldset>
    <Label>Username</Label>
    <Input />
    <Label>Password</Label>
    <Input type="password" />
    <Button type="primary">Submit</Button>
  </Fieldset>
</Form>
```

Form Aligned:

```jsx
<Form type="aligned">
  <Fieldset type="input-group">
    <Label>Username</Label>
    <Input />
  </Fieldset>
  <Fieldset type="input-group">
    <Label>Password</Label>
    <Input type="password" />
  </Fieldset>
  <Fieldset type="action-group">
    <Button type="primary">Submit</Button>
  </Fieldset>
</Form>
```

Form Fieldset Group:

```jsx
<Form>
  <Fieldset type="form-group">
    <Input placeholder="Username" />
    <Input placeholder="Password" type="password" />
  </Fieldset>
  <Fieldset type="action-group">
    <Input id="remember" type="checkbox" />
    <label htmlFor="remember">Remember me</label>
  </Fieldset>
  <br />
  <Fieldset type="action-group">
    <Input id="yes" type="radio" name="agree" />
    <label htmlFor="yes">Yes</label> <Input id="no" type="radio" name="agree" />
    <label htmlFor="no">No</label>
  </Fieldset>
  <br />
  <Fieldset type="action-group">
    <Input id="switch" type="switch" /> <label htmlFor="switch">Switch?</label>
  </Fieldset>
  <br />
  <Fieldset>
    <select id="multi-state">
      <option>Singapore</option>
      <option>Malaysia</option>
      <option>Indonesia</option>
    </select>
  </Fieldset>
  <br />
  <Fieldset type="action-group">
    <Button type="primary">Submit</Button>
  </Fieldset>
</Form>
```
