Q1: Which of the following is a display value for a CSS Grid parent element?
A1: grid
Great! This display value turns the container into a 2-dimensional system to lay out HTML elements.

Q2: Which of the following would make a grid with 2 equally sized columns and 4 equally sized rows?
A2:

```
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
```

Yes! The 2 columns are the same size because they each take up 50% of the total width. The 4 rows split up the available height into 4 equal parts.

Q3: Which of the following is equivalent to the sample code below?

```
.item {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

A3:

```
grid-area: 2/1/4/2;
Correct! The order for grid-area is: grid-row-start, grid-column-start, grid-row-end, grid-column-end.
```

Q4: Which of the following would make a grid with 3 columns where the middle column takes up 60% of the space, the first column takes up 1/3 of the remaining space and the last column takes up 2/3 of the remaining space?

A4:

```
grid-template-columns: 1fr 60% 2fr;
```

Great! The middle column takes up 60% of the width, and then the first and last columns split up the remaining available space into 3 parts, of which the first column takes up 1 part and the last column takes up 2 parts

Q5: Which of the following is equivalent to the sample code below?

```
.layout {
  grid-template-columns: 200px 200px;
  grid-template-rows: 100px 200px 100px;
}
```

A5:

```
grid-template: 100px 200px 100px / 200px 200px;
```

The format for using grid-template as a shorthand is grid-template-rows / grid-template-columns.

Q6: How tall will the .item element be if the following CSS is in effect?
A6:

```
.layout {
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px 200px 100px;
  gap: 10px;
}
.item {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

This item spans two rows, one of height 100px and one of height 200px, and one grid-gap of size 10px in between them, for a total of 100 + 200 + 10 = 310px in total.

Q7: How wide will the .item element be if the following CSS is in effect?
A7:

```
.layout {
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px 200px 100px;
  gap: 10px;
}
.item {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

The item only spans 1 column, and each column is 200px.

Q8: Which of the following would make an item span 3 columns?
A8:

```
grid-column-start:1;
gird-column-end:4;

Great! This will make the item take up columns 1, 2, and 3 – spanning 3 columns in total.
```

Q9: Which of the following is a display value for a CSS Grid parent element?
A9: grid
Great! This display value turns the container into a 2-dimensional system to lay out HTML elements.

Q10: Which of the following would create an item that begins at the 3rd row of the grid?
A10:

```
grid-row-start: 3;
Correct! In the CSS Grid, row and column values are 1-indexed, so you can get the 3rd row by using index 3 with grid-row-start.
```

Q11: Which of the following would make a grid with 2 columns - one twice as big as the other?
A11:
grid-template-columns : 1fr 2fr;

That’s it! The available space in the grid is split into 3 equal parts, of which the first column takes 1 part and the second column takes 2 parts.

Q12: Which of the following would make a grid with 2 equally sized columns and 4 equally sized rows?
A12:

```
grid-template-columns: 50% 50%;
grid-template-rows: 1fr 1fr 1fr 1fr;
```

Yes! The 2 columns are the same size because they each take up 50% of the total width. The 4 rows split up the available height into 4 equal parts.

Q13: Which of the following would make an item start at row 2 and end right before row 5?
A13:
grid-row: 2 / span 3;
