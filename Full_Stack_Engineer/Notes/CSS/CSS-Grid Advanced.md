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
