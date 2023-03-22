## What is Flexbox?

Flexible Box Layout or flexbox, a tool that greatly simplifies how to position elements.

There are two important components to a flexbox layout: flex containers and flex items. A flex container is an element on a page that contains flex items. All direct child elements of a flex container are flex items. This distinction is important because some of the properties you will learn in this lesson apply to flex containers while others apply to flex items.

To designate an element as a flex container, set the element’s display property to flex or inline-flex. Once an item is a flex container, there are several properties we can use to specify how its children behave. In this lesson we will cover these properties:

1.  justify-content - To position item left to right.
2.  align-items - To align items vertically within the container.
3.  flex-grow - specify if items should grow and which item & in what proportions
4.  flex-shrink - specify which elements will shrink and in what proportions
5.  flex-basis -
6.  flex \*\*\*
7.  flex-wrap
8.  align-content
9.  flex-direction
10. flex-flow

Flexbox is an elegant tool that makes it easy to address positioning issues that may have been difficult before.

## 1.justify-content

To justify the content of a flex container from left to right across the page

Below are five commonly used values for the justify-content property:

    1. flex-start — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.

    2. flex-end — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.

    3. center — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.

    4. space-around — items will be positioned with equal space before and after each item, resulting in double the space between elements.

    5. space-between — items will be positioned with equal space between them, but no extra space before the first or after the last elements.

2. align-items

---

The align-items property makes it possible to space flex items vertically.

Below are five commonly used values for the align-items property:

    1. flex-start — all elements will be positioned at the top of the parent container.
    2. flex-end — all elements will be positioned at the bottom of the parent container.
    3. center — the center of all elements will be positioned halfway between the top and bottom of the parent container.
    4. baseline — the bottom of the content of all items will be aligned with each other.
    5. stretch — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).

These five values tell the elements how to behave along the cross axis of the parent container. In these examples, the cross axis stretches from top to bottom of the container.

3. flex-grow

---

we learned that all flex items shrink proportionally when the flex container is too small. However, if the parent container is larger than necessary then the flex items will not stretch by default. The flex-grow property allows us to specify if items should grow to fill a container and also which items should grow proportionally more or less than others.

```
<div class='container'>
  <div class='side'>
    <h1>I’m on the side of the flex container!</h1>
  </div>
  <div class='center'>
    <h1>I'm in the center of the flex container!</h1>
  </div>
  <div class='side'>
    <h1>I'm on the other side of the flex container!</h1>
  </div>
</div>

.container {
  display: flex;
}

.side {
  width: 100px;
  flex-grow: 1;
}

.center {
  width: 100px;
  flex-grow: 2;
}
```

In the example above, the .container div has a display value of flex, so its three child divs will be positioned next to each other. If there is additional space in the .container div (in this case, if it is wider than 300 pixels), the flex items will grow to fill it. The .center div will stretch twice as much as the .side divs. For example, if there were 60 additional pixels of space, the center div would absorb 30 pixels and the side divs would absorb 15 pixels each.

If a max-width is set for an element, it will not grow larger than that even if there is more space for it to absorb.

All of the previous properties we have learned are declared on flex containers, or the parent elements. This property — flex-grow — is the first we have learned that is declared on flex items.

4. flex-shrink

---

Just as the flex-grow property proportionally stretches flex items, the flex-shrink property can be used to specify which elements will shrink and in what proportions.

You may have noticed in earlier exercises that flex items shrank when the flex container was too small, even though we had not declared the property. This is because the default value of flex-shrink is 1. However, flex items do not grow unless the flex-grow property is declared because the default value of flex-grow is 0.

```
<div class='container'>
  <div class='side'>
    <h1>I'm on the side of the flex container!</h1>
  </div>
  <div class='center'>
    <h1>I'm in the center of the flex container!</h1>
  </div>
  <div class='side'>
    <h1>I'm on the other side of the flex container!</h1>
  </div>
</div>

.container {
  display: flex;
}

.side {
  width: 100px;
  flex-shrink: 1;
}

.center {
  width: 100px;
  flex-shrink: 2;
}
```

In the example above, the .center div will shrink twice as much as the .side divs if the .container div is too small to fit the elements within it. If the content is 60 pixels too large for the flex container that surrounds it, the .center div will shrink by 30 pixels and the outer divs will shrink by 15 pixels each. Margins are unaffected by flex-grow and flex-shrink.

Keep in mind, minimum and maximum widths will take precedence over flex-grow and flex-shrink. As with flex-grow, flex-shrink will only be employed if the parent container is too small or the browser is adjusted.
