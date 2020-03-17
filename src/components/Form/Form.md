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
    <label>Username</label>
    <Input />
    <label>Password</label>
    <Input type="password" />
    <Button type="primary">Submit</Button>
  </Fieldset>
</Form>
```

Form Aligned:

```jsx
<Form type="aligned">
  <Fieldset type="input-group">
    <label>Username</label>
    <Input />
  </Fieldset>
  <Fieldset type="input-group">
    <label>Password</label>
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
    <Button type="primary">Submit</Button>
  </Fieldset>
</Form>
```
