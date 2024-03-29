## 1. Flex

The shorthand flex property provides a convenient way for specifying how elements stretch and shrink, while simplifying the CSS required. The flex property allows you to declare flex-grow, flex-shrink, and flex-basis all in one line.

Note: The flex property is different from the flex value used for the display property.

```
.big {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 150px;
}

.small {
  flex-grow: 1;
  flex-shrink: 2;
  flex-basis: 100px;
}
```

In the example above, all elements with class big will grow twice as much as elements with class small. Keep in mind, this doesn’t mean big items will be twice as big as small items, they’ll just take up more of the extra space.

The CSS below declares these three properties in one line.

```
.big {
  flex: 2 1 150px;
}

.small {
  flex: 1 2 100px;
}
```

In the example above, we use the flex property to declare the values for flex-grow, flex-shrink, and flex-basis (in that order) all in one line.

```
.big {
 flex: 2 1;
}
```

In the example above, we use the flex property to declare flex-grow and flex-shrink, but not flex-basis.

```
.small {
  flex: 1 20px;
}
```

In the example above, we use the flex property to declare flex-grow and flex-basis. Note that there is no way to set only flex-shrink and flex-basis using 2 values.

The browser to the right has two flex containers, each with three flex items. In style.css, examine the values for each of these items. Notice that the flex-grow and flex-basis values are set for the blue divs.

Stretch the browser window to increase its width. Observe that once the top outer divs reach 100 pixels wide, they begin to grow faster than the top center div. Also notice that once the bottom center div reaches 100 pixels wide, it begins to grow faster than the outer divs.

Now, shrink the browser window and notice that once the top center div reaches 50 pixels wide it begins to shrink faster than the outer divs and when the bottom outer divs reach 75 pixels, they begin to shrink faster than the center div.

## 2. Flex-wrap

Sometimes, we don’t want our content to shrink to fit its container. Instead, we might want flex items to move to the next line when necessary. This can be declared with the flex-wrap property. The flex-wrap property can accept three values:

    wrap — child elements of a flex container that don’t fit into a row will move down to the next line
    wrap-reverse — the same functionality as wrap, but the order of rows within a flex container is reversed (for example, in a 2-row flexbox, the first row from a wrap container will become the second in wrap-reverse and the second row from the wrap container will become the first in wrap-reverse)
    nowrap — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.

```
<div class='container'>
  <div class='item'>
    <h1>We're going to wrap!</h1>
  </div>
  <div class='item'>
    <h1>We're going to wrap!</h1>
  </div>
  <div class='item'>
    <h1>We're going to wrap!</h1>
  </div>
</div>
```

CSS - Style

```
.container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 250px;
}

.item {
  width: 100px;
  height: 100px;
}
```

In the example above, three flex items are contained by a parent flex container. The flex container is only 250 pixels wide so the three 100 pixel wide flex items cannot fit inline. The flex-wrap: wrap; setting causes the third, overflowing item to appear on a new line, below the other two items.

Note: The flex-wrap property is declared on flex containers.

3. Align-content

---

Now that elements can wrap to the next line, we might have multiple rows of flex items within the same container. In a previous exercise, we used the align-items property to space flex items from the top to the bottom of a flex container. align-items is for aligning elements within a single row. If a flex container has multiple rows of content, we can use align-content to space the rows from top to bottom.

Below are some of the more commonly used align-content values:

    flex-start — all rows of elements will be positioned at the top of the parent container with no extra space between.
    flex-end — all rows of elements will be positioned at the bottom of the parent container with no extra space between.
    center — all rows of elements will be positioned at the center of the parent element with no extra space between.
    space-between — all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.
    space-around — all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.
    stretch — if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

```
<div class='container'>
  <div class='child'>
    <h1>1</h1>
  </div>
  <div class='child'>
    <h1>2</h1>
  </div>
  <div class='child'>
    <h1>3</h1>
  </div>
  <div class='child'>
    <h1>4</h1>
  </div>
</div>
```

CSS align-content

```
.container {
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  align-content: space-around;
}

.child {
  width: 150px;
  height: 150px;
}
```

In the example above, there are four flex items inside of a flex container. The flex items are set to be 150 pixels wide each, but the parent container is only 400 pixels wide. This means that no more than two elements can be displayed inline. The other two elements will wrap to the next line and there will be two rows of divs inside of the flex container. The align-content property is set to the value of space-around, which means the two rows of divs will be evenly spaced from top to bottom of the parent container with equal space before the first row and after the second, with double space between the rows.

Below, we will see each of the properties in action!

Note: The align-content property is declared on flex containers.

4. flex-direction

---

Up to this point, we’ve only covered flex items that stretch and shrink horizontally and wrap vertically. As previously stated, flex containers have two axes: a main axis and a cross axis. By default, the main axis is horizontal and the cross axis is vertical.

The main axis is used to position flex items with the following properties:

    1. justify-content
    2. flex-wrap
    3. flex-grow
    4. flex-shrink

The cross axis is used to position flex items with the following properties:

    1. align-items
    2. align-content

The main axis and cross axis are interchangeable. We can switch them using the flex-direction property. If we add the flex-direction property and give it a value of column, the flex items will be ordered vertically, not horizontally.

```
<div class='container'>
  <div class='item'>
    <h1>1</h1>
  </div>
  <div class='item'>
    <h1>2</h1>
  </div>
  <div class='item'>
    <h1>3</h1>
  </div>
  <div class='item'>
    <h1>4</h1>
  </div>
  <div class="item">
    <h1>5</h1>
  </div>
</div>
```

CSS Flex-direction

```
.container {
  display: flex;
  flex-direction: column;
  width: 1000px;
}
.item {
  height: 100px;
  width: 100px;
}
```

In the example above, the five divs will be positioned in a vertical column. All of these divs could fit in one horizontal row. However, the column value tells the browser to stack the divs one on top of the other. As explained above, properties like justify-content will not behave the way they did in previous examples.

The flex-direction property can accept four values:

    1. row — elements will be positioned from left to right across the parent element starting from the top left corner (default).
    2. row-reverse — elements will be positioned from right to left across the parent element starting from the top right corner.
    3. column — elements will be positioned from top to bottom of the parent element starting from the top left corner.
    4. column-reverse — elements will be positioned from the bottom to the top of the parent element starting from the bottom left corner.

Below, we’ll investigate how these work.

Note: The flex-direction property is declared on flex containers.

5. flex-flow

---

Like the shorthand flex property, the shorthand flex-flow property is used to declare both the flex-wrap and flex-direction properties in one line.

```
.container {
display: flex;
flex-wrap: wrap;
flex-direction: column;
}
```

In the example above, we take two lines to accomplish what can be done with one.

```
.container {
display: flex;
flex-flow: column wrap;
}
```

In the example above, the first value in the flex-flow declaration is a flex-direction value and the second is a flex-wrap value. All values for flex-direction and flex-wrap are accepted.

Note: The flex-flow property is declared on flex containers.

6. Nested Flexboxes

---

So far, we’ve had multiple flex containers on the same page to explore flex item positioning. It is also possible to position flex containers inside of one another.

```
<div class='container'>
  <div class='left'>
    <img class='small' src='#'/>
    <img class='small' src='#'/>
    <img class='small' src='#' />
  </div>
  <div class='right'>
    <img class='large' src='#' />
  </div>
</div>
```

CSS for Nest Flexboxes

```
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  display: inline-flex;
  flex: 2 1 200px;
  flex-direction: column;
}

.right {
  display: inline-flex;
  flex: 1 2 400px;
  align-items: center;
}

.small {
  height: 200px;
  width: auto;
}

.large {
  height: 600px;
  width: auto;
}
```

In the example above, a div with three smaller images will display from top to bottom on the left of the page (.left). There is also a div with one large image that will display on the right side of the page (.right). The left div has a smaller flex-basis but stretches to fill more extra space; the right div has a larger flex-basis but stretches to fill less extra space. Both divs are flex items and flex containers. The items have properties that dictate how they will be positioned in the parent container and how their flex item children will be positioned in them.

## Review: Flexbox

You should be proud of yourself! You have learned the most important properties of flexbox. Flexbox is an art and a science; you can use it to make laying out multiple elements a piece of cake. You know everything necessary to begin using it in your own projects.

    1. display: flex changes an element to a block-level container with flex items inside of it.

    2. display: inline-flex allows multiple flex containers to appear inline with each other.

    3. justify-content is used to space items along the main axis.

    4. align-items is used to space items along the cross axis.

    5. flex-grow is used to specify how much space (and in what proportions) flex items absorb along the main axis.

    6. flex-shrink is used to specify how much flex items shrink and in what proportions along the main axis.

    7. flex-basis is used to specify the initial size of an element styled with flex-grow and/or flex-shrink.

    8. flex is used to specify flex-grow, flex-shrink, and flex-basis in one declaration.

    9. flex-wrap specifies that elements should shift along the cross axis if the flex container is not large enough.

    10. align-content is used to space rows along the cross axis.

    11. flex-direction is used to specify the main and cross axes.

    12. flex-flow is used to specify flex-wrap and flex-direction in one declaration.

    13. Flex containers can be nested inside of each other by declaring display: flex or display: inline-flex for children of flex containers.
