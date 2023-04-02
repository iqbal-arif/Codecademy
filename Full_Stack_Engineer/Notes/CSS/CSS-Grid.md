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

## Fraction

You may already be familiar with several types of responsive units such as percentages (%), ems and rems. CSS Grid introduced a new relative sizing unit — fr, like fraction.

By using the fr unit, we can define the size of columns and rows as a fraction of the grid’s length and width. This unit was specifically created for use in CSS Grid. Using fr makes it easier to prevent grid items from overflowing the boundaries of the grid. Consider the code below:

```
.grid {
  display: grid;
  width: 1000px;
  height: 400px;
  grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}
```

In this example, the grid will have three rows and three columns. The rows are splitting up the available 400 pixels of height into four parts. The first row gets two of those parts, the second row gets one, and the third row gets one. Therefore the first row is 200 pixels tall, and the second and third rows are 100 pixels tall.

Each column’s width is a fraction of the available space. In this case, the available space is split into five parts. The first column gets one-fifth of the space, the second column gets three-fifths, and the last column gets one-fifth. Since the total width is 1000 pixels, this means that the columns will have widths of 200 pixels, 600 pixels, and 200 pixels respectively.

It is possible to use fr with other units as well. When this happens, each fr represents a fraction of the available space.

```
.grid {
  display: grid;
  width: 100px;
  grid-template-columns: 1fr 60px 1fr;
}
```

In this example, 60 pixels are taken up by the second column. Therefore the first and third columns have 40 available to split between them. Since each gets one fraction of the total, they both end up being 20 pixels wide.

## Repeat

The properties that define the number of rows and columns in a grid can take a function as a value. repeat() is one of these functions. The repeat() function was created specifically for CSS Grid.

```
.grid {
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 100px);
}
```

The repeat function will duplicate the specifications for rows or columns a given number of times. In the example above, using the repeat function will make the grid have three columns that are each 100 pixels wide. It is the same as writing:

grid-template-columns: 100px 100px 100px;

Repeat is particularly useful with fr. For example, repeat(5, 1fr) would split your table into five equal rows or columns.

Finally, the second parameter of repeat() can have multiple values.

grid-template-columns: repeat(2, 20px 50px)

This code will create four columns where the first and third columns will be 20 pixels wide and the second and fourth will be 50 pixels wide.

## minmax

So far, all of the grids that we have worked with have been a fixed size. The grid in our example has been 400 pixels wide and 500 pixels tall. But sometimes you might want a grid to resize based on the size of your web browser.

In these situations, you might want to prevent a row or column from getting too big or too small. For example, if you have a 100-pixel wide image in your grid, you probably don’t want its column to get thinner than 100 pixels! The minmax() function can help us solve this problem.

```
.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}
```

In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, however, will vary in size as the overall grid resizes. The second column will always be between 100 and 500 pixels wide.

## Grid Gap

In all of our grids so far, there hasn’t been any space between the items in our grid. The CSS properties row-gap and column-gap will put blank space between every row and column in the grid.

```
.grid {
  display: grid;
  width: 320px;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
```

It is important to note that grid gap properties do not add space at the beginning or end of the grid. In the example code, our grid will have three columns with two ten-pixel gaps between them.

Let’s quickly calculate how wide these columns are. Remember that using fr considers all of the available space. The grid is 320 pixels wide and 20 of those pixels are taken up by the two grid gaps. Therefore each column takes a piece of the 300 available pixels. Each column gets 1fr, so the columns are evenly divided into thirds (or 100 pixels each).

Finally, there is a shorthand CSS property, gap, that can set the row and column gap at the same time.

```
.grid {
  display: grid;
  width: 320px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
}
```

The example above will set the distance between rows to 20 pixels and the distance between columns to 10 pixels. Unlike other CSS grid properties, this shorthand does not take a / between values! If only one value is given, it will set the column gap and the row gap to that value.

    **Note:** You might have seen grid-row-gap, grid-column-gap, and grid-gap in other code, but these properties are now deprecated.
