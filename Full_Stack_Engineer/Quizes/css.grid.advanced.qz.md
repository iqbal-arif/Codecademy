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

```
.grid {
grid-auto-columns: 100px 200px;
grid-auto-flow: column;
}
```

A7: 100px
The boxes will fill up implicitly created columns which alternate between being 100px and 200px.

Q8: Which of the following can **grid-auto-flow** take as a value to favor filling holes earlier in the grid?
A8: **dense**
Yes! A grid with a **dense** setting for **grid-auto-flow** will try to fit an item into spaces earlier in the grid if there is room for it.

Q9: Imagine we have a grid with the following CSS properties, with 4 boxes inside of it. If we added a fifth box to the HTML, what width would it have?

```
.grid {
  grid-template-rows: repeat(2, 50px);
  grid-template-columns: repeat(2, 100px);
  grid-auto-rows: 60px;
  grid-auto-columns: 70px;
}
```

A9: 100px
The new box will still be in one of the explicitly defined columns, which are 100px each.

Q10: What does justify-content: end do?
A10: It aligns the grid items to the right end of the grid container.
Yes! justify-content aligns along the row axis, where end corresponds to the right side of the container.

Q11:Which pair of properties both align along the row axis (as opposed to the column axis)?
A11: **justify-content,justify-self**

Q12: Imagine we have a grid with 2 explicitly defined rows and 2 explicitly defined columns and no other grid properties set in the CSS, with the following divs inside of it. If we added a <div class="box">E</div> to the HTML after box D, where would box E appear on the page?

```
<div class="box">A</div>
<div class="box">B</div>
<div class="box">C</div>
<div class="box">D</div>
```

A12: It would appear underneath box C in a new row.
Great. The default is for the grid to implicitly create new rows, unless grid-auto-flow is specifically set to column.

Q13: Imagine we have a grid with the following CSS properties, with 4 boxes inside of it. If we added a fifth box to the HTML, what height would it have?

.grid {
grid-template-rows: repeat(2, 50px);
grid-template-columns: repeat(2, 100px);
grid-auto-rows: 60px;
grid-auto-columns: 70px;
}

A13: 60px
Any implicitly created rows will have the height specified by grid-auto-rows, not the height of the explicitly created rows.
