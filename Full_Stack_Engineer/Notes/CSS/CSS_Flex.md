## flex

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

## flex-wrap

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
