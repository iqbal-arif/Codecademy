## Advanced CSS Grid

**Introduction**

In the previous lesson, you learned all the foundational properties necessary to create a two-dimensional grid-based layout for your web pages! In this lesson, you’ll learn the following additional properties that you can use to harness the power of CSS Grid Layout:

    1. grid-template-areas
    2. justify-items
    3. justify-content
    4. justify-self
    5. align-items
    6. align-content
    7. align-self
    8. grid-auto-rows
    9. grid-auto-columns

10. grid-auto-flow

You will also learn about the explicit and implicit grids and grid axes.

## Grid Template Areas

The grid-template-areas property allows you to name sections of your web page to use as values in the grid-row-start, grid-row-end, grid-column-start,grid-column-end, and grid-area properties. This property is declared on grid containers.

```
<div class="container">
  <header>Welcome!</header>
  <nav>Links!</nav>
  <section class="info">Info!</section>
  <section class="services">Services!</section>
  <footer>Contact us!</footer>
</div>
```

CSS Style Sheet

```
.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  grid-template-areas: "header header"
                       "nav nav"
                       "info services"
                       "footer footer";
  grid-template-rows: 300px 120px 800px 120px;
  grid-template-columns: 1fr 3fr;
}

header {
  grid-area: header;
}

nav {
  grid-area: nav;
}

.info {
  grid-area: info;
}

.services {
  grid-area: services;
}

footer {
  grid-area: footer;
}
```

You may want to expand this section of the website to view the code above more clearly.

    In the example above, the HTML creates a web page with five distinct parts.
    In the .container ruleset, the grid-template-areas declaration creates a 2-column, 4-row layout.
    The grid-template-rows declaration specifies the height of each of the four rows from top to bottom: 300 pixels, 120 pixels, 800 pixels, and 120 pixels.
    The grid-template-columns declaration uses the fr value to cause the left column to use one fourth of the available space on the page and the right column to use three-fourths of the available space on the page.
    In each ruleset below .container, we use the grid-area property to tell that section to cover the portion of the page specified. The header element spans the first row and both columns. The nav element spans the second row and both columns. The element with class .info spans the third row and left column. The element with class .services spans the third row and right column. The footer element spans the bottom row and both columns.
    That’s it! An entire page laid out in 40 lines of code.

## Overlapping Elements

Another powerful feature of CSS Grid Layout is the ability to easily overlap elements.

When overlapping elements, it is generally easiest to use the grid-area property with grid row names. Remember that grid-area will set the starting and ending positions for both the rows and columns of an item.

```
<div class="container">
  <div class="info">Info!</div>
  <img src="#" />
  <div class="services">Services!</div>
</div>
```

CSS Style Sheet

```
.container {
  display: grid;
  grid-template: repeat(8, 200px) / repeat(6, 100px);
}

.info {
  grid-area: 1 / 1 / 9 / 4;
}

.services {
  grid-area: 1 / 4 / 9 / 7;
}

img {
  grid-area: 2 / 3 / 5 / 5;
  z-index: 5;
}
```

In the example above, there is a grid container with eight rows and six columns. There are three grid items within the container — a <div> with the class info, a <div> with the class services, and an image.

The info section covers all eight rows and the first three columns. The services section covers all eight rows and the last three columns.

The image spans the 2nd, 3rd, and 4th rows and the 3rd and 4th columns.

The z-index property tells the browser to render the image element on top of the services and info sections so that it is visible.

## Justify Items - Row - Axis - Area

We have referred to “two-dimensional grid-based layout” several times throughout this course.

There are two axes in a grid layout — the column (or block) axis and the row (or inline) axis.

The column axis stretches from top to bottom across the web page.

The row axis stretches from left to right across the web page.

In the following four exercises, we will learn and use properties that rely on an understanding of grid axes.

justify-items is a property that positions grid items along the inline, or row, axis. This means that it positions items from left to right across the web page. This property is declared on grid containers.

justify-items accepts these values:

    1. start — aligns grid items to the left side of the grid area
    2. end — aligns grid items to the right side of the grid area
    3. center — aligns grid items to the center of the grid area
    4. stretch — stretches all items to fill the grid area

There are several other values that justify-items accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```
<main>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</main>
```

CSS Style Sheet

```
main {
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-items: center;
}
```

In the example above, we use justify-items to adjust the positioning of some elements on this web page.

    1. There is a grid container with three columns that are each 400 pixels wide.
    2. The container has three grid items that do not have a specified width.
    3. Without setting the justify-items property, these elements will span the width of the column they are in (400 pixels).
    4. By setting the justify-items property to center, the .card <div>s will be centered inside of their columns. They will only be as wide as necessary to contain their content (the words Card 1, etc).
    5. If we specify a width for the .card elements, they will not stretch the width of their column.

## Justify Content - Row - Axis Content

In the previous exercise, we learned how to position elements within their columns. In this exercise, we will learn how to position a grid within its parent element.

We can use justify-content to position the entire grid along the row axis. This property is declared on grid containers.

It accepts these values:

    1. start — aligns the grid to the left side of the grid container
    2. end — aligns the grid to the right side of the grid container
    3. center — centers the grid horizontally in the grid container
    4. stretch — stretches the grid items to increase the size of the grid to expand horizontally across the container
    5. space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
    6. space-between — includes an equal amount of space between grid items and no space at either end
    7. space-evenly — places an even amount of space between grid items and at either end

There are several other values that justify-content accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```
<main>
  <div class="left">Left</div>
  <div class="right">Right</div>
</main>
```

CSS Style Sheet

```
main {
display: grid;
width: 1000px;
grid-template-columns: 300px 300px;
grid-template-areas: "left right";
justify-content: center;
}
```

    1. In the example above, the grid container is 1000 pixels wide, but we only specified two columns that are 300 pixels each. This will leave 400 pixels of unused space in the grid container.
    2. justify-content: center; positions the columns in the center of the grid, leaving 200 pixels on the right and 200 pixels on the left of the grid.

## Align Items - Column - Top - to - Bottom - Grid Area

In the previous two exercises, we learned how to position grid items and grid columns from left to right across the page. Now we’ll learn how to position grid items from top to bottom!

align-items is a property that positions grid items along the block, or column axis. This means that it positions items from top to bottom. This property is declared on grid containers.

align-items accepts these values:

    start — aligns grid items to the top side of the grid area
    end — aligns grid items to the bottom side of the grid area
    center — aligns grid items to the center of the grid area
    stretch — stretches all items to fill the grid area

There are several other values that align-items accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```
<main>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</main>
```

CSS Style Sheet

```
main {
display: grid;
grid-template-rows: repeat(3, 400px);
align-items: center;
}
```

In the example above, we use align-items to adjust the positioning of some elements on this web page.

    1. There is a grid container with three rows that are 400 pixels tall.
    2. The container has three grid items that do not have a specified width.
    3. Without setting the align-items property, these elements will span the height of the row they are in (400 pixels).
    4. By setting the align-items property to center, the .card <div>s will be centered vertically inside of their rows. They will only be as tall as necessary to contain their content (the words Card 1, etc).
    5. If we specify a height for the .card elements, they will not stretch the height of their row even if align-items: stretch; is set.

## Align Content - Position Rows - Column Axis - Top - Bottom - Grid Container

In the previous exercise, we positioned grid items within their rows. align-content positions the rows along the column axis, or from top to bottom, and is declared on grid containers.

It accepts these positional values:

    1. start — aligns the grid to the top of the grid container
    2. end — aligns the grid to the bottom of the grid container
    3. center — centers the grid vertically in the grid container
    4. stretch — stretches the grid items to increase the size of the grid to expand vertically across the container
    5. space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element
    6. space-between — includes an equal amount of space between grid items and no space at either end
    7. space-evenly — places an even amount of space between grid items and at either end

There are several other values that align-content accepts, which you can read about on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

```
<main>
  <div class="top">Top</div>
  <div class="bottom">Bottom</div>
</main>
```

CSS Style Sheet

```
main {
display: grid;
height: 600px;
grid-template-rows: 200px 200px;
grid-template-areas: "top"
"bottom";
align-content: center;
}
```

    1. In the example above, the grid container is 600 pixels tall, but we only specified two rows that are 200 pixels each. This will leave 200 pixels of unused space in the grid container.
    2. align-content: center; positions the rows in the center of the grid, leaving 100 pixels at the top and 100 pixels at the bottom of the grid.

## Justify Self and Align Self - Row -Axis - Individual Item

The justify-items and align-items properties specify how all grid items contained within a single container will position themselves along the row and column axes, respectively.

justify-self specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.

align-self specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.

These properties are declared on grid items. They both accept these four properties:

    start — positions grid items on the left side/top of the grid area
    end — positions grid items on the right side/bottom of the grid area
    center — positions grid items on the center of the grid area
    stretch — positions grid items to fill the grid area (default)

align-self and justify-self accept the same values as align-items and justify-items. You can read about these values on the Mozilla Developer Network. The definitions for these values can also be found in the documentation. It is important to note that the page with the definitions includes some values that are not accepted in CSS Grid layout.

## Implicit vs. Explicit Grid

So far, we have been explicitly defining the dimensions and quantities of our grid elements using various properties. This works well in many cases, such as a landing page for a business that will display a specific amount of information at all times.

However, there are instances in which we don’t know how much information we’re going to display. For example, consider online shopping. Often, these web pages include the option at the bottom of the search results to display a certain quantity of results or to display ALL results on a single page. When displaying all results, the web developer can’t know in advance how many elements will be in the search results each time.

What happens if the developer has specified a 3-column, 5-row grid (for a total of 15 items), but the search results return 30?

Something called the implicit grid takes over. The implicit grid is an algorithm built into the specification for CSS Grid that determines default behavior for the placement of elements when there are more than fit into the grid specified by the CSS.

The default behavior of the implicit grid is as follows: items fill up rows first, adding new rows as necessary. New grid rows will only be tall enough to contain the content within them. In the next exercise, you’ll learn how to change this default behavior.

## Grid Auto Rows and Grid Auto Columns

CSS Grid provides two properties to specify the size of grid tracks added implicitly: grid-auto-rows and grid-auto-columns. These properties are declared on grid containers.

grid-auto-rows specifies the height of implicitly added grid rows. grid-auto-columns specifies the width of implicitly added grid columns.

grid-auto-rows and grid-auto-columns accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns:

    1. pixels (px)
    2. percentages (%)
    3. fractions (fr)
    4. the repeat() function

```
<body>
  <div>Part 1</div>
  <div>Part 2</div>
  <div>Part 3</div>
  <div>Part 4</div>
  <div>Part 5</div>
</body>
```

CSS Style Sheet

```
body {
display: grid;
grid: repeat(2, 100px) / repeat(2, 150px);
grid-auto-rows: 50px;
}
```

In the example above, there are 5 <div>s. However, in the body ruleset, we only specify a 2-row, 2-column grid — four grid cells.

The fifth <div> will be added to an implicit row that will be 50 pixels tall.

If we did not specify grid-auto-rows, the rows would be auto-adjusted to the height of the content of the grid items.

## Grid Auto Flow

In addition to setting the dimensions of implicitly-added rows and columns, we can specify the order in which they are rendered.

grid-auto-flow specifies whether new elements should be added to rows or columns, and is declared on grid containers.

grid-auto-flow accepts these values:

    1. row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)
    2. column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
    3. dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added

You can pair row or column with dense, like this: grid-auto-flow: row dense;.

## Review

Great work! You have learned many new properties to use when creating a layout using CSS Grid! Let’s review:

    1. grid-template-areas specifies grid named grid areas
    2. grid layouts are two-dimensional: they have a row, or inline, axis and a column, or block, axis.
    3. justify-items specifies how individual elements should spread across the row axis
    4. justify-content specifies how groups of elements should spread across the row axis
    5. justify-self specifies how a single element should position itself with respect to the row axis
    6. align-items specifies how individual elements should spread across the column axis
    7. align-content specifies how groups of elements should spread across the column axis
    8. align-self specifies how a single element should position itself with respect to the column axis
    9.grid-auto-rows specifies the height of rows added implicitly to the grid

    10. grid-auto-columns specifies the width of columns added implicitly to the grid
    11. grid-auto-flow specifies in which direction implicit elements should be created
