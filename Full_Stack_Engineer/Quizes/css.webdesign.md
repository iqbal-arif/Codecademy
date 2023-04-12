Q1: An **em** represents which of the following?
A1: The size of the base font in use.
Correct! em represents the font-size of the current element, which is the size of the base font in use.

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
When using rem, use the font size specified in the html selector. In this case, 16 x 1.5 will make the pixel size 24.

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

Q6: The height property in the code below should be set to which of the following values to ensure that the image remains proportional to its original size?

```
img {
  width: 500px;
  height: ?
}
```

A6: auto
Correct! Setting height to auto ensures that the height of the image will automatically scale proportionally to the explicitly set width.
