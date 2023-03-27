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
