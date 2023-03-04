Q1: How would the following CSS rule set affect paragraph (<p>) elements?

```
p {
  line-height: 1.5;
}
```

A1: Space will appear between lines of text in the <p> element because the container for each line is 1.5 times its default height.

Q2: Why might a user see the Times font with this CSS rule?

```
h1 {
  font-family: Garamond, Times, serif;
}
```

A2: The Garamond font is not available on the user's computer, but Times is.

Q3: Why is it important to include web-safe, fallback fonts?
A3: In the case that your custom fonts don't render, web-safe fonts provide a secondary option.

Q4: What does the following line of HTML code do?

<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

A4: Links a font file and allows you to use the **Lato** font for **font-family** in CSS style rules.

Q5: The following HTML code links to what Google Font?

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

A5: Roboto

Q6: What’s the difference between serif and sans-serif fonts?
A6: Serif fonts include details on the ends of letters, whereas sans-serif fonts do not.

Q7: The following CSS code fails to set the typeface of the heading to Courier New. Why?

```
h1 {
  font-family: Courier New, Times, serif;
}
```

A7: **Courier New** must be enclosed in double quotation marks since it contains a space.

Q8: Which rule will make all <h1> text uppercase?

A8:

```
h1{
    text-transform: uppercase;
}
```

Q9: How does this CSS rule set affect <h1> elements?

```
h1 {
  letter-spacing: 20px;
}
```

A9: **<h1>** elements will have 20 pixels of space between every letter.
