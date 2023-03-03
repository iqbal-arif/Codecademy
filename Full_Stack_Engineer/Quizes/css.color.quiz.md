Q1: What does the fourth value inside rgba() control?

```
body {
  background-color: rgba(212, 34, 99, 0.75);
}
```

A1: Opacity, or alpha value.

Q2: The following CSS code attempts to set the color of a paragraph using an RGB color, but fails to do so. Why?

```
p {
  color: rgb(277, 56, FF);
}
```

A2: The three parameters of the rgb() property must be numbers between 0 and 255.

Q3: The following CSS code attempts to set the color of a paragraph using an HSL color, but fails to do so. Why?

```
p {
  color: hsl(65, -5, -4);
}
```

A3: The saturation and lightness value must be positive percentages.

Q4: How could this code be re-written but guarantee the same appearance in the browser?

```
body h1 {
  color: #BB44FF;
}
```

A4: Correct! Hex values with doubled digits for each color value can be shortened to three characters.

```
body h1 {
  color: #B4F;
}
```

Q5: The following CSS code attempts to set the text color of a paragraph using a named color, but fails to do so. Why?

```
p {
  color: bold;
}
```

A5: **bold** is not a valid color keyword in CSS.

Q6: What is one limitation of named CSS colors that hexadecimal and RGB colors do not have?

A6: Named CSS colors are limited to a specific set and cannot represent the full color palette.

Q7: Which of the following two CSS properties are used to set an HTML element’s foreground color and background color, respectively?

A7: **color** and **background-color**
