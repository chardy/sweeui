Basic Layout:

```jsx
<Grid>
  <Row>
    <Col xs={12} sm={3} md={2} lg={1} ><Box variant="card">1</Box></Col>
    <Col xs={6} sm={6} md={8} lg={10} ><Box variant="card">2</Box></Col>
    <Col xs={6} sm={3} md={2} lg={1} ><Box variant="card">3</Box></Col>
  </Row>
</Grid>
```

We can implement without Grid as well.

```jsx
  <Row>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">1</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">2</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">3</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">4</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">5</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">6</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">7</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">8</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">9</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">10</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">11</Box>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
      <Box variant="card">12</Box>
    </Col>
    <Col xl={12}>
      <Box variant="card">xl 12</Box>
    </Col>
  </Row>
```

Offset Sample

```jsx
<Row>
  <Col xsOffset={11} xs={1}><Box variant="card">offset 11</Box></Col>
  <Col xsOffset={10} xs={2}><Box variant="card">offset 10</Box></Col>
  <Col xsOffset={9} xs={3}><Box variant="card">offset 9</Box></Col>
  <Col xsOffset={8} xs={4}><Box variant="card">offset 8</Box></Col>
  <Col xsOffset={7} xs={5}><Box variant="card">offset 7</Box></Col>
  <Col xsOffset={6} xs={6}><Box variant="card">offset 6</Box></Col>
  <Col xsOffset={5} xs={7}><Box variant="card">offset 5</Box></Col>
  <Col xsOffset={4} xs={8}><Box variant="card">offset 4</Box></Col>
  <Col xsOffset={3} xs={9}><Box variant="card">offset 3</Box></Col>
  <Col xsOffset={2} xs={10}><Box variant="card">offset 2</Box></Col>
  <Col xsOffset={1} xs={11}><Box variant="card">offset 1</Box></Col>
</Row>
```

Default to lg or anything from 'xs', 'sm', 'md', 'lg', 'xl'

```jsx
<Row>
  <Col lg><Box variant="card">1</Box></Col>
  <Col lg><Box variant="card">2</Box></Col>
  <Col lg><Box variant="card">3</Box></Col>
</Row>
```

The component <Col> if not apecify will auto distribute

```jsx
<Row>
  <Col lg><Box variant="card">2</Box></Col>
  <Col lg><Box variant="card">3</Box></Col>
</Row>
```

Distribute 'around'

```jsx
<Row around="lg">
  <Col lg={3}><Box variant="card">1</Box></Col>
  <Col lg={3}><Box variant="card">2</Box></Col>
  <Col lg={3}><Box variant="card">3</Box></Col>
</Row>
```

Distribute 'between'

```jsx
<Row between="lg">
  <Col lg={3}><Box variant="card">1</Box></Col>
  <Col lg={3}><Box variant="card">2</Box></Col>
  <Col lg={3}><Box variant="card">3</Box></Col>
</Row>
```

Distribute 'start'

```jsx
<Row start="lg">
  <Col lg={3}><Box variant="card">1</Box></Col>
  <Col lg={3}><Box variant="card">2</Box></Col>
  <Col lg={3}><Box variant="card">3</Box></Col>
</Row>
```

Distribute 'end'

```jsx
<Row end="lg">
  <Col lg={3}><Box variant="card">1</Box></Col>
  <Col lg={3}><Box variant="card">2</Box></Col>
  <Col lg={3}><Box variant="card">3</Box></Col>
</Row>
```

Align 'top'

```jsx
<Row top="lg" style={{background: "#efefef", height: "100px"}}>
  <Col lg={4}><Box variant="card">1</Box></Col>
  <Col lg={4}><Box variant="card">2</Box></Col>
  <Col lg={4}><Box variant="card">3</Box></Col>
</Row>
```

Align 'middle'

```jsx
<Row middle="lg" style={{background: "#efefef", height: "100px"}}>
  <Col lg={4}><Box variant="card">1</Box></Col>
  <Col lg={4}><Box variant="card">2</Box></Col>
  <Col lg={4}><Box variant="card">3</Box></Col>
</Row>
```

Align 'bottom'

```jsx
<Row bottom="lg" style={{background: "#efefef", height: "100px"}}>
  <Col lg={4}><Box variant="card">1</Box></Col>
  <Col lg={4}><Box variant="card">2</Box></Col>
  <Col lg={4}><Box variant="card">3</Box></Col>
</Row>
```

Hidden if...

```jsx
<Row>
  <Col lg><Box variant="card">1</Box></Col>
  <Col lg><Box variant="card">2</Box></Col>
  <Col lg hidden="xs"><Box variant="card">3</Box></Col>
</Row>
```

```jsx
<Grid>
  <Col><Box variant="card">1</Box></Col>
  <Col><Box variant="card">2</Box></Col>
  <Col hidden="xs"><Box variant="card">3</Box></Col>
</Grid>
```
