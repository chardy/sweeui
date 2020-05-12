Flex Basic Layout
```jsx
<Flex>
  <Box variant="card">Element 1</Box>
  <Box variant="card">Element 2</Box>
  <Box variant="card">Element 3</Box>
  <Box variant="card">Element 4</Box>
  <Box variant="card">Element 5</Box>
  <Box variant="card">Element 6</Box>
</Flex>
```

Flex: Vertical Direction
```jsx
<Flex direction="vertical">
  <Box variant="card">direction: vertical</Box>
  <Box variant="card">element 1</Box>
  <Box variant="card">element 2</Box>
</Flex>
```

Flex Grow
```jsx
<Flex>
  <Box variant="card">element</Box>
  <Flex grow={1}>
    <Box className="full-width" variant="card">grow: 1</Box>
  </Flex>
  <Box variant="card">element</Box>
</Flex>
```

Flex with Fixed Width
```jsx
<Flex>
  <Flex width={"150px"}>
    <Box className="full-width" variant="card">width: 150px</Box>
  </Flex>
  <Flex grow={1}>
    <Box className="full-width" variant="card">grow: 1</Box>
  </Flex>
  <Flex width={"180px"}>
    <Box className="full-width" variant="card">width: 180px</Box>
  </Flex>
</Flex>
```

Flex with Fixed Height
```jsx
<Flex direction="vertical">
  <Flex height={50}>
    <Box className="box-size full-width full-height" variant="card">height: 50</Box>
  </Flex>
  <Flex height={60}>
    <Box className="box-size full-width full-height" variant="card">height: 60</Box>
  </Flex>
  <Flex height={100}>
    <Box className="box-size full-width full-height" variant="card">height: 100</Box>
  </Flex>
</Flex>
```

Flex with Overflow X
```jsx
<Box variant="card" background={"#F8F8F8"}>
  <Flex gutter={[8,0]} overflowX={true}>
    <Flex height={60} width={"33.33%"}>
      <Box variant="card" className="box-size full-width full-height" padding="0">
        <Flex align={"middle"} justify={"center"} className="full-height">
          overflowX: true
        </Flex>
      </Box>
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
  </Flex>
</Box>
```

Flex with Overflow Y
```jsx
<Flex direction="vertical" overflowY={1} height={130}>
  <Flex height={40}>
    <Box className="box-size full-width" variant="card">overflowY: 1</Box>
  </Flex>
  <Flex height={40}>
    <Box className="box-size full-width" variant="card">element</Box>
  </Flex>
  <Flex height={40}>
    <Box className="box-size full-width" variant="card">element</Box>
  </Flex>
  <Flex height={40}>
    <Box className="box-size full-width" variant="card">element</Box>
  </Flex>
  <Flex height={40}>
    <Box className="box-size full-width" variant="card">element</Box>
  </Flex>
</Flex>
```

Flex Alignments
```jsx
<Flex wrap={1}>
  <Flex background={"#EEEEEE"} height={80} width={"33.33%"} align={"top"} justify={"start"}>
    <Box variant="card">align: top, justify: start</Box>
  </Flex>
  <Flex background={"#F8F8F8"} height={80} width={"33.33%"} align={"top"} justify={"center"}>
    <Box variant="card">align: top, justify: center</Box>
  </Flex>
  <Flex background={"#EEEEEE"} height={80} width={"33.33%"} align={"top"} justify={"end"}>
    <Box variant="card">align: top, justify: end</Box>
  </Flex>
  <Flex background={"#F8F8F8"} height={80} width={"33.33%"} align={"middle"} justify={"start"}>
    <Box variant="card">align: middle, justify: start</Box>
  </Flex>
  <Flex background={"#EEEEEE"} height={80} width={"33.33%"} align={"middle"} justify={"center"}>
    <Box variant="card">align: middle, justify: center</Box>
  </Flex>
  <Flex background={"#F8F8F8"} height={80} width={"33.33%"} align={"middle"} justify={"end"}>
    <Box variant="card">align: middle, justify: end</Box>
  </Flex>
  <Flex background={"#EEEEEE"} height={80} width={"33.33%"} align={"bottom"} justify={"start"}>
    <Box variant="card">align: bottom, justify: start</Box>
  </Flex>
  <Flex background={"#F8F8F8"} height={80} width={"33.33%"} align={"bottom"} justify={"center"}>
    <Box variant="card">align: bottom, justify: center</Box>
  </Flex>
  <Flex background={"#EEEEEE"} height={80} width={"33.33%"} align={"bottom"} justify={"end"}>
    <Box variant="card">align: bottom, justify: end</Box>
  </Flex>
</Flex>
```

Flex with Gutter [X,Y]
```jsx
<Box variant="card" background={"#F8F8F8"}>
  <Flex gutter={[32,16]} wrap={1}>
    <Flex height={60} width={"33.33%"}>
      <Box variant="card" className="box-size full-width full-height" padding="0">
        <Flex align={"middle"} justify={"center"} className="full-height">
          gutter: [32,16]
        </Flex>
      </Box>
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
    <Flex height={60} width={"33.33%"} align={"middle"} justify={"center"}>
      <Box variant="card" className="box-size full-width full-height" padding="0" />
    </Flex>
  </Flex>
</Box>
```

Flex with Background Color<br/>
<small>(Note. For Layouting without Gutter)</small>
```jsx
<Flex wrap={1}>
  <Flex background={"#DB3236"} height={80} width={"33.33%"} align={"middle"} justify={"center"}>
    background: #DB3236
  </Flex>
  <Flex background={"#3CBA54"} height={80} width={"33.33%"} align={"middle"} justify={"center"}>
    background: #3CBA54
  </Flex>
  <Flex background={"#4885ED"} height={80} width={"33.33%"} align={"middle"} justify={"center"}>
    background: #4885ED
  </Flex>
</Flex>
```
