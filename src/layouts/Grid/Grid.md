Basic Layout:

```jsx
<Grid>
  <Col>
    <Box variant="card">1</Box>
  </Col>
  <Col>
    <Box variant="card">2</Box>
  </Col>
  <Col>
    <Box variant="card">3</Box>
  </Col>
  <Col>
    <Box variant="card">4</Box>
  </Col>
  <Col>
    <Box variant="card">5</Box>
  </Col>
  <Col>
    <Box variant="card">6</Box>
  </Col>
  <Col>
    <Box variant="card">7</Box>
  </Col>
  <Col>
    <Box variant="card">8</Box>
  </Col>
  <Col>
    <Box variant="card">9</Box>
  </Col>
  <Col>
    <Box variant="card">10</Box>
  </Col>
  <Col>
    <Box variant="card">11</Box>
  </Col>
  <Col>
    <Box variant="card">12</Box>
  </Col>
</Grid>
```

Grid col="3"

```jsx
<Grid col="3">
  <Col>
    <Box variant="card">1</Box>
  </Col>
  <Col>
    <Box variant="card">2</Box>
  </Col>
  <Col>
    <Box variant="card">3</Box>
  </Col>
</Grid>
```

@media screen and (max-width: 35.5em) Max 568px _xs_

@media screen and (max-width: 48em) Max 768px _sm_

@media screen and (max-width: 64em) Max 1024px _md_

@media screen and (max-width: 80em) Max 1280px _lg_

Grid col="3" xs="1" md="2" lg="3"

```jsx
<Grid col="3" xs="1" md="2" lg="3">
  <Col>
    <Box variant="card">1</Box>
  </Col>
  <Col>
    <Box variant="card">2</Box>
  </Col>
  <Col>
    <Box variant="card">3</Box>
  </Col>
</Grid>
```

Sample for Col below:

```jsx
<Grid>
  <Col col="2">
    <Box variant="card">col-2</Box>
  </Col>
  <Col col="4">
    <Box variant="card">col-4</Box>
  </Col>
  <Col col="6">
    <Box variant="card">col-6</Box>
  </Col>
</Grid>
```

```jsx
<Grid>
  <Col col="2" xs="12">
    <Box variant="card">col-2 xs-12</Box>
  </Col>
  <Col col="4">
    <Box variant="card">col-4</Box>
  </Col>
  <Col col="6">
    <Box variant="card">col-6</Box>
  </Col>
</Grid>
```

```jsx
<Grid>
  <Col col="2" xs="12">
    <Box variant="card">col-2 xs-12</Box>
  </Col>
  <Col col="8" pushLeft="2">
    <Box variant="card">col-8 with push left 2</Box>
  </Col>
  <Col col="6" pushRight="4">
    <Box variant="card">col-6 with push right 4</Box>
  </Col>
  <Col col="2">
    <Box variant="card">col-2</Box>
  </Col>
</Grid>
```
