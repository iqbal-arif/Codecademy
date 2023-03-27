Q1: Which of the following display values will allow multiple flex containers to appear inline with each other?

A1: inline-flex
Correct! inline-flex allows us to create flex containers that are also inline elements.

Q2: What is the align-items property used for?
A2: To align flex items on the cross axis.
Correct! The align-items property makes it possible to space out flex items on the cross axis.

Q3: Which three values do the justify-content and align-items properties share?
A3: flex-start, flex-end, center

Q4: Which of the following justify-content values positions all flex items in order with no additional spacing at the end of the row?
A4: flex-end
Correct! flex-end will set all items to be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.

Q5: What does the 1 represent in the following code snippet?

```
.small {
  flex: 1 20px;
}
```

A5: flex-grow
Correct! When there are only two values of the flex property, the first value is used to set flex-grow.

Q6: Imagine there are 60 extra pixels along the main axis and elements #alpha, #beta, and #gamma have the following flex-grow values. How many extra pixels will element #alpha have?

```
#alpha {
  flex-grow: 2;
}

#beta {
  flex-grow: 1;
}

#gamma {
  flex-grow: 1;
}
```

A6: 30 px
Correct! #alpha will grow twice as much as #beta and #gamma do.

Q7: Which of the following choices will set a flex container’s flex-direction property to column and its flex-wrap property to wrap?

A7: flex-flow: column wrap

Q8: Based on the code below where #container is a flex container and .box are its flex items, what can we assume about the width of the .box elements?

```
div#container {
   display: flex;
}

.box {
   width: 300px;
}
```

A8: The width of the .box elements will depend on the size of the screen.

Q9:Which of the following shorthand syntaxes would achieve the same styling on the item class?

```
.item {
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 120px;
}
```

A9: flex: 2 1 120px
Correct! Values of flex-grow, flex-shrink and flex-basis can be declared in one line using the flex property.
