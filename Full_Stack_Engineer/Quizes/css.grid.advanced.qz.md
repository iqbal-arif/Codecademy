Q1: Which of the following properties sizes implicit grid rows?
A1: **grid-auto-rows**
Great. Using grid-auto-rows, you can set what size you want your implicitly created rows to take.

Q2: Which **align-content** value would you use to have an even amount of space between the **_grid items_**, with no spaces on the far ends?
A2: **space-between**

Q3: Which three values do the **justify-content** and **align-items** properties share?
A3: **start,end,center**
Great! You can use any of these three values with **justify-content** and **align-items**.

Q4: Which of the following **display** values will set an element to be a grid container and inline?
A4: **inline-grid**
Yes! This creates a grid at the inline-level.

Q5: Which **justify-conten**t value would you use to have an even amount of space between the grid items, with half-sized spaces on the far ends?
A5: **space-around**
Right! This creates even space between the grid items, with a half space on each end.

Q6:Which of the following can be applied to a grid item (as opposed to the grid container)?
A6: **align-self**
Yes! align-self is for the grid child elements.

Q7: Imagine we have a grid with 4 items in it, with the following CSS properties. What width would the 3rd column be?

.grid {
grid-auto-columns: 100px 200px;
grid-auto-flow: column;
}
A7: 100px
The boxes will fill up implicitly created columns which alternate between being 100px and 200px.

Q8: Which of the following can **grid-auto-flow** take as a value to favor filling holes earlier in the grid?
A8: **dense**
Yes! A grid with a **dense** setting for **grid-auto-flow** will try to fit an item into spaces earlier in the grid if there is room for it.
