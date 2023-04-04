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
