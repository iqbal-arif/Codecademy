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

A4:
