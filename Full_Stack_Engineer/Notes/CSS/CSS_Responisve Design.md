<!-- Responsive Design -->
<!-- *-*-*-*-*-*- SIZING ELEMENTS -*-*-*-*-*-*- -->

1. Relative Measurements

---

Modern technology allows users to browse the Internet via multiple devices, such as desktop monitors, mobile phones, tablets, and more. Devices of different screen sizes, however, pose a problem for web developers: how can we ensure that a website is readable and visually appealing across all devices, regardless of screen size?

The answer: responsive design! Responsive design refers to the ability of a website to resize and reorganize its content based on:

    1. The size of other content on the website.
    2. The size of the screen the website is being viewed on.

In this lesson, we’ll size HTML content relative to other content on a website.

You’ve probably noticed the unit of pixels, or px, used in websites. Pixels are used to size content to exact dimensions. For example, if you want a div to be exactly 500 pixels wide and 100 pixels tall, then the unit of px can be used. Pixels, however, are fixed, hard coded values. When a screen size changes (like switching from landscape to portrait view on a phone), elements sized with pixels can appear too small, overflow the screen, or become completely illegible.

With CSS, you can avoid hard coded measurements and use relative measurements instead. Relative measurements offer an advantage over hard coded measurements, as they allow for the proportions of a website to remain intact regardless of screen size or layout.

2. Em

---

Incorporating relative sizing starts by using units other than pixels. One unit of measurement you can use in CSS to create relatively-sized content is the em, written as em in CSS.

Historically, the em represented the width of a capital letter M in the typeface and size being used. That is no longer the case.

Today, the em represents the font-size of the current element or the default base font-size set by the browser if none is given. For example, if the base font of a browser is 16 pixels (which is normally the default size of text in a browser), then 1 em is equal to 16 pixels. 2 ems would equal 32 pixels, and so on.

Let’s take a look at two examples that show how em can be used in CSS.

```
.heading {
  font-size: 2em;
}
```

In the example above, no base font has been specified, therefore the font size of the heading element will be set relative to the default font size of the browser. Assuming the default font size is 16 pixels, then the font size of the heading element will be 32 pixels.

```
.splash-section {
  font-size: 18px;
}

.splash-section h1 {
  font-size: 1.5em;
}
```

The example above shows how to use ems without relying on the default font size of the browser. Instead, a base font size (18px) is defined for all text within the splash-section element. The second CSS rule will set the font size of all h1 elements inside of splash-section relative to the base font of splash-section (18 pixels). The resulting font size of h1 elements will be 27 pixels.

3. Rem

---

The second relative unit of measurement in CSS is the rem, coded as rem.

Rem stands for root em. It acts similar to em, but instead of checking parent elements to size font, it checks the root element. The root element is the <html> tag.

Most browsers set the font size of <html> to 16 pixels, so by default rem measurements will be compared to that value. To set a different font size for the root element, you can add a CSS rule.

```
html {
  font-size: 20px;
}

h1 {
  font-size: 2rem;
}
```

In the example above, the font size of the root element, <html>, is set to 20 pixels. All subsequent rem measurements will now be compared to that value and the size of h1 elements in the example will be 40 pixels.

One advantage of using rems is that all elements are compared to the same font size value, making it easy to predict how large or small font will appear. If you are interested in sizing elements consistently across an entire website, the rem measurement is the best unit for the job. If you’re interested in sizing elements in comparison to other elements nearby, then the em unit would be better suited for the job.

4. Percentages: Height & Width

---

To size non-text HTML elements relative to their parent elements on the page you can use percentages.

Percentages are often used to size box-model values, like width and height, padding, border, and margins. They can also be used to set positioning properties (top, bottom, left, right).

To start, let’s size the height and width of an element using percentages.

```
.main {
  height: 300px;
  width: 500px;
}

.main .subsection {
  height: 50%;
  width: 50%;
}
```

In the example above, .main and .subsection each represent divs. The .subsection div is nested within the .main div. Note that the dimensions of the parent div (.main) have been set to a height of 300 pixels and a width of 500 pixels.

When percentages are used, elements are sized relative to the dimensions of their parent element (also known as a container). Therefore, the dimensions of the .subsection div will be 150 pixels tall and 250 pixels wide. Be careful, a child element’s dimensions may be set erroneously if the dimensions of its parent element aren’t set first.

**_Note: Because the box model includes padding, borders, and margins, setting an element’s width to 100% may cause content to overflow its parent container. While tempting, 100% should only be used when content will not have padding, border, or margin._**

5. Percentages: Padding & Margin

---

Percentages can also be used to set the padding and margin of elements.

When height and width are set using percentages, you learned that the dimensions of child elements are calculated based on the dimensions of the parent element.

When percentages are used to set padding and margin, however, they are calculated based only on the width of the parent element.

For example, when a property like margin-left is set using a percentage (say 50%), the element will be moved halfway to the right in the parent container (as opposed to the child element receiving a margin half of its parent’s margin).

Vertical padding and margin are also calculated based on the width of the parent. Why? Consider the following scenario:

    1. A container div is defined, but its height is not set (meaning it’s flat).
    2. The container then has a child element added within. The child element does have a set height. This causes the height of its parent container to stretch to that height.
    3. The child element requires a change, and its height is modified. This causes the parent container’s height to also stretch to the new height. This cycle occurs endlessly whenever the child element’s height is changed!

In the scenario above, an unset height (the parent’s) results in a constantly changing height due to changes to the child element. This is why vertical padding and margin are based on the width of the parent, and not the height.

**_Note: When using relative sizing, ems and rems should be used to size text and dimensions on the page related to text size (i.e. padding around text). This creates a consistent layout based on text size. Otherwise, percentages should be used._**

6. Width: Minimum & Maximum

---

Although relative measurements provide consistent layouts across devices of different screen sizes, elements on a website can lose their integrity when they become too small or large. You can limit how wide an element becomes with the following properties:

    1. min-width — ensures a minimum width for an element.
    2. max-width — ensures a maximum width for an element.

```
p {
  min-width: 300px;
  max-width: 600px;
}
```

In the example above, when the browser is resized, the width of paragraph elements will not fall below 300 pixels, nor will their width exceed 600 pixels.

When a browser window is narrowed or widened, text can become either very compressed or very spread out, making it difficult to read. These two properties ensure that content is legible by limiting the minimum and maximum widths.

Note: The unit of pixels is used to ensure hard limits on the dimensions of the element(s).
