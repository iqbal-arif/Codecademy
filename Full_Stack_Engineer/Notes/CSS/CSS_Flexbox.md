## What is Flexbox?

Flexible Box Layout or flexbox, a tool that greatly simplifies how to position elements.

There are two important components to a flexbox layout: flex containers and flex items. A flex container is an element on a page that contains flex items. All direct child elements of a flex container are flex items. This distinction is important because some of the properties you will learn in this lesson apply to flex containers while others apply to flex items.

To designate an element as a flex container, set the element’s display property to flex or inline-flex. Once an item is a flex container, there are several properties we can use to specify how its children behave. In this lesson we will cover these properties:

1.  justify-content - To position item left to right.
2.  align-items
3.  flex-grow
4.  flex-shrink
5.  flex-basis
6.  flex \*\*\*
7.  flex-wrap
8.  align-content
9.  flex-direction
10. flex-flow

Flexbox is an elegant tool that makes it easy to address positioning issues that may have been difficult before.

## 1.justify-content

Below are five commonly used values for the justify-content property:

    1. flex-start — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.

    2. flex-end — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.

    3. center — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.

    4. space-around — items will be positioned with equal space before and after each item, resulting in double the space between elements.

    5. space-between — items will be positioned with equal space between them, but no extra space before the first or after the last elements.
