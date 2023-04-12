Q1: An **em** represents which of the following?
A1: The size of the base font in use.
Correct! em represents the **font-size** of the current element, which is the size of the **base font** in use.

Q2: What is the difference between an em and a rem?
A2: An **em** sizes relative to the current element's font-size or inherited base font-size, whereas **rem** sizes relative to the root element's font-sze.
Correct! **em** sizes relative to the current **font-size** of the element, either its explicitly set **font-size** or its inherited base **font-size** if **font-size** is not explicitly set. **rems** however, size relative to the root element’s **font-size**.

Q3: When percentages are used to size height and width, dimensions are set relative to which of the following?
A3: The parent of a child element.
Correct! When using percentages to set the **heigh**t and **width** properties, dimensions are relative to the parent element of the element whose dimensions are being set.

Q4: The following code will set the text of a paragraph inside a .splash-section element to how many pixels?

```
html {
  font-size: 16px;
}

.splash-section {
  font-size: 18px;
}

.splash-section p {
  font-size: 1.5rem;
}
```

A4: 24px
When using rem, use the **font size** specified in the **html** selector. In this case, **16 x 1.5** will make the pixel **size 24**.

Q5: In the code below, how many pixels should the font size of the root element be set to in order to set the size of main headings to 36 pixels?

```
html {
  font-size: ?
}

h1 {
  font-size: 2rem;
}
```

A5: 18px
Correct! 36px &divide; 2rem = 18px

Q6: The **height** property in the code below should be set to which of the following values to ensure that the image remains **proportional** to its original size?

```
img {
  width: 500px;
  height: ?
}
```

A6: auto
Correct! Setting **height** to **auto** ensures that the height of the image will automatically scale proportionally to the explicitly set width.

Q7: What is needed to change the default font size of the root element?
A7: A CSS rule that targets the **font-size** of the **<html>** element.

Q8: The following code will size all h1 elements in "splash-section" to how many pixels?

```
html {
  font-size: 12px;
}

.splash-section {
  font-size: 16px;
}

.splash-section h1 {
  font-size: 1.5em;
}
```

A8: 24 px.
Correct! **16px** (the **.splash-section h1**‘s starting **font-size** which was inherited from the **.splash -section**) \* **1.5em** (multiple of the **.splash-section h1**‘s starting **font-size**) = **24px**

Q9: What are the minimum dimensions of a div with the following properties?

```
div.container {
  min-height: 150px;
  max-height: 600px;
  min-width: 300px;
  max-width: 900px;
}
```

A9: 150px tall and 300px wide.
Correct! **min-height** sets the minimum height of an element and **min-width** sets the minimum width of an element. Here, the minimum height of **div.container** is **150px** and the minimum width is **300px**.

Q10: Assume the default font size of a browser is 12 pixels. The following code will size the paragraph’s text to how many pixels?

`p {
font-size: 1.5em;
}`
A:10 18px
Correct! **12px** (the **p** element’s starting **font-size** which was inherited from the root element) \* **1.5em** (multiple of the **p** element’s starting **font-size**) = **18px**

Q11: Which of the following is the root element that rems size relative to?
A11: **<html>**
Correct! The **<html>** element, also known as the root element, is the element **rem**s size relative to.

Q12: The code below will display images in which of the following ways?

```
.container {
  width: 50%;
  height: 200px;
  overflow: hidden;
}

.container img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

A12: Images will shrink to the full width of their container, scale proportionally, and display partially if the image dimensions exceed container dimensions.

Correct! **max-width: 100%;** makes our **.container img** element shrink to the full width of the **.container** element, **height: auto;** will allow our image to scale proportionally with the width, and the **overflow: hidden;** property on the **.container** element ensures that if the image dimensions exceed the container dimensions, the overflowing content will be hidden from view.

Q13: Which of the following is an advantage of using relative units of measurements over hard-coded measurements?
A13: Relative units of measurements ensure consistent proportions across a website, regardless of screen size ro layout.

Correct! Ensuring consistent proportions across a website regardless of layout or screen size is one of the main advantages to using relative units.

Q14: When percentages are used to size padding and width, dimensions are set relative to which of the following?
A14:
