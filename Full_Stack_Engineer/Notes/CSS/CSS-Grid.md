## Creating a Grid

To set up a grid, you need to have both a grid container and grid items. The grid container will be a parent element that contains grid items as children and applies overarching styling and positioning to them.

To turn an HTML element into a grid container, you must set the element’s display property to one of two values:

1.  grid — for a block-level grid.
2.  inline-grid — for an inline grid.

Then, you can assign other properties to lay out the grid to suit your needs.

## Creating Columns

By default, grids contain only one column. If you were to start adding items, each item would be put on a new row; that’s not much of a grid! To change this, we need to explicitly define the number of rows and columns in our grid.

We can define the columns of our grid by using the CSS property grid-template-columns. Below is an example of this property in action:

```
.grid {
  display: grid;
  width: 500px;
  grid-template-columns: 100px 200px;
}
```

This property creates two changes. First, it defines the number of columns in the grid; in this case, there are two. Second, it sets the width of each column. The first column will be 100 pixels wide and the second column will be 200 pixels wide.

We can also define the size of our columns as a percentage of the entire grid’s width.

```
.grid {
  display: grid;
  width: 1000px;
  grid-template-columns: 20% 50%;
}
```

In this example, the grid is 1000 pixels wide. Therefore, the first column will be 200 pixels wide because it is set to be 20% of the grid’s width. The second column will be 500 pixels wide.

We can also mix and match these two units. In the example below, there are three columns of width 20 pixels, 40 percent, and 60 pixels:

```
.grid {
  display: grid;
  width: 100px;
  grid-template-columns: 20px 40% 60px;
}
```

Notice that in this example, the total width of our columns (120 pixels) exceeds the width of the grid (100 pixels). This might make our grid cover other elements on the page! In a later exercise, we will discuss how to avoid overflow.

## Creating Rows

We’ve learned how to define the number of columns in our grid explicitly. To specify the number and size of the rows, we are going to use the property grid-template-rows.

This property is almost identical to grid-template-columns. Take a look at the code below to see both properties in action.

```
.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template-columns: 100px 200px;
  grid-template-rows: 10% 20% 600px;
}
```

This grid has two columns and three rows. grid-template-rows defines the number of rows and sets each row’s height. In this example, the first row is 50 pixels tall (10% of 500), the second row is 100 pixels tall (20% of 500), and the third row is 600 pixels tall.

When using percentages in these two properties, remember that rows are defined as a percentage of the grid’s height, and columns are defined as a percentage of its width.

## Grid Template

The shorthand property, grid-template, can replace the previous two CSS properties. Both grid-template-rows and grid-template-columns are nowhere to be found in the following code!

```
.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  grid-template: 200px 300px / 20% 10% 70%;
}
```

When using grid-template, the values before the slash will determine the size of each row. The values after the slash determine the size of each column. In this example, we’ve made two rows and three columns of varying sizes.

The same rules from before apply; when using percentages to set rows, each row will be a percentage of the grid’s total height. Columns are still a percentage of the total width.
