The Box Model

---

The box model comprises the set of properties that define parts of an element that take up space on a web page. The model includes the content area’s size (width and height) and the element’s padding, border, and margin. The properties include:

    1. width and height: The width and height of the content area.
    2. padding: The amount of space between the content area and the border.
    3. border: The thickness and style of the border surrounding the content area and padding.
    4. margin: The amount of space between the border and the outside edge of the element.

Borders

---

A border is a line that surrounds an element, like a frame around a painting. Borders can be set with a specific width, style, and color:

    1. width—The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick.
    2. style—The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.
    4. color—The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.

Padding Shorthand

---

1. 4 Values

p.content-header {
padding: 6px 11px 4px 9px;
}

it specifies the padding-top value (6px), the padding-right value (11px), the padding-bottom value (4px), and the padding-left value (9px) of the content.

2. 3 Values

p.content-header {
padding: 5px 10px 20px;
}

If the left and right sides of the content can be equal, the padding shorthand property allows for 3 values to be specified. The first value sets the padding-top value (5px), the second value sets the padding-left and padding-right values (10px), and the third value sets the padding-bottom value (20px).

3. 2 Values

p.content-header {
padding: 5px 10px;
}

The first value sets the padding-top and padding-bottom values (5px), and the second value sets the padding-left and padding-right values (10px).

Auto Margin for Centering the Element

---

The margin property also lets you center content. However, you must follow a few syntax requirements. Take a look at the following example:

div.headline {
width: 400px;
margin: 0 auto;
}

n order to center an element, a width must be set for that element. Otherwise, the width of the div will be automatically set to the full width of its containing element, like the <body>, for example. It’s not possible to center an element that takes up the full width of the page, since the width of the page can change due to display and/or browser window size.

Margin Collapse

---

As you have seen, padding is space added inside an element’s border, while margin is space added outside an element’s border. One additional difference is that top and bottom margins, also called vertical margins, collapse, while top and bottom padding does not.

Horizontal margins (left and right), like padding, are always displayed and added together. For example, if two divs with ids #div-one and #div-two, are next to each other, they will be as far apart as the sum of their adjacent margins.

#img-one {
margin-right: 20px;
}

#img-two {
margin-left: 20px;
}

In this example, the space between the #img-one and #img-two borders is 40 pixels. The right margin of #img-one (20px) and the left margin of #img-two (20px) add to make a total margin of 40 pixels.

Unlike horizontal margins, vertical margins do not add. Instead, the larger of the two vertical margins sets the distance between adjacent elements.

#img-one {
margin-bottom: 30px;
}

#img-two {
margin-top: 20px;
}

In this example, the vertical margin between the #img-one and #img-two elements is 30 pixels. Although the sum of the margins is 50 pixels, the margin collapses so the spacing is only dependent on the #img-one bottom margin.

It may be helpful to think of collapsing vertical margins as a short person trying to push a taller person. The tall person has longer arms and can easily push the short person, while the person with short arms cannot reach the person with long arms.

Overflow

---

---

The overflow property controls what happens to content that spills, or overflows, outside its box. The most commonly used values are:

1.  hidden—when set to this value, any content that overflows will be hidden from view.
2.  scroll—when set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
3.  visible—when set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.
4.  overflow-x
5.  overflow-y

Resetting Defaults

---

All major web browsers have a default stylesheet they use in the absence of an external stylesheet. These default stylesheets are known as user agent stylesheets. In this case, the term user agent is a technical term for the browser.

User agent stylesheets often have default CSS rules that set default values for padding and margin. This affects how the browser displays HTML elements, which can make it difficult for a developer to design or style a web page.

Many developers choose to reset these default values so that they can truly work with a clean slate.

- {
  margin: 0;
  padding: 0;
  }

The code in the example above resets the default margin and padding values of all HTML elements. It is often the first CSS rule in an external stylesheet.

Note that both properties are set to 0. When these properties are set to 0, they do not require a unit of measurement.

Visibility

---

Elements can be hidden from view with the visibility property.

The visibility property can be set to one of the following values:

    hidden — hides an element.
    visible — displays an element.
    collapse — collapses an element.

Note: What’s the difference between display: none and visibility: hidden? An element with display: none will be completely removed from the web page. An element with visibility: hidden, however, will not be visible on the web page, but the space reserved for it will.

Review

---

In this lesson, we covered the four properties of the box model: height and width, padding, borders, and margins. Understanding the box model is an important step towards learning more advanced HTML and CSS topics. Let’s take a minute to review what you learned:

    1. The box model comprises a set of properties used to create space around and between HTML elements.
    2. The height and width of a content area can be set in pixels or percentages.
    3. Borders surround the content area and padding of an element. The color, style, and thickness of a border can be set with CSS properties.
    4. Padding is the space between the content area and the border. It can be set in pixels or percent.
    5. Margin is the amount of spacing outside of an element’s border.
    6. Horizontal margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one element and the left margin of the adjacent element.
    7. Vertical margins collapse, so the space between vertically adjacent elements is equal to the larger margin.
    8. margin: 0 auto horizontally centers an element inside of its parent content area, if it has a width.
    9. The overflow property can be set to display, hide, or scroll, and dictates how HTML will render content that overflows its parent’s content area.
    10.The visibility property can hide or show elements.

Instructions

Make some adjustments to the code in the code editor. See if you can improve the appearance of the page by changing the following properties:

    width
    height
    padding
    border
    margin
    overflow
