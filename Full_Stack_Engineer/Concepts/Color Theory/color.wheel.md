1. The Color Wheel

---

If you’ve taken an art class, it’s likely that you’ve been introduced to the color wheel. This is a tool used by artists and designers to visualize the relationship between colors.

It’s comprised of three color groups: primary, secondary and tertiary.

**Primary** colors are comprised of red, blue and yellow. These are equidistant to each other on the wheel, forming a triangle. They are also the basis for all other colors on the wheel.

**Secondary** colors are created by mixing two primary colors, forming green, orange and purple.

The third and final group of colors are considered to be **Tertiary** and are formed when mixing a secondary and primary. These usually result in a two-word name, such as:

1.  Red-orange (Vermillion)
2.  Yellow-orange (Amber)
3.  Yellow-green (Chartreuse)
4.  Blue-green (Teal)
5.  Blue-purple (Violet)
6.  Red-purple (Magenta)

7.  The Color Wheel and HSLA

---

There are a few different options for setting colors in CSS that we covered in Learn CSS: Color. Take a look at the code below to refresh yourself on the different ways of setting color in CSS.

```
h1 {
    color: Yellow; /*Keyword */
}
h2 {
    color: #8FBC8F; /* Hex Code */
}
h3 {
    color: rgb(23, 45, 23); /* RGB*/
}
p {
    color: hsla(34, 100%, 50%, 0.1); /* HSLA*/
}
```

When thinking like a designer, HSLA is the preferred syntax for setting colors. Why?

    1. The CSS color keywords only give us a few options.
    2. Hex Codes and RGB values cannot be intuitively adjusted. For example, you get feedback on your design that one color needs to be a little brighter, that does not translate to intuitive changes within Hexadecimal codes or RGB values.
    3. HSLA is the most semantic system of setting colors with CSS.

Let’s review what each value means:

    1. The “pure” color is set with the Hue. This is expressed as the angle in degrees around the color wheel.

    2. Saturation refers to the intensity or purity of that hue. Colors with full saturation (100%) are the color itself, colors with no saturation (0%) are completely grayscale.

    3. Lightness refers to the lightness of the color. 0% is black, 100% is white.

    4. A, or alpha, refers to the opacity. 0% is fully transparent, 100% is fully opaque.

3. Warm Colors

---

All colors have a warmth value assigned to them, which can be classified as warm or cool.

Warm colors range between red and yellow, which include various versions of those colors in addition to orange. This also comprises colors such as brown and tan. These are considered to be “warm” colors in that they evoke a sense of warmth. For instance, fire is associated with warmth, and it typically burns between the spectrum of reds and yellows. Warm colors can also promote a feeling of aggression and are considered bold

4. Cool Colors

---

On the other side of the color wheel in contrast to warm colors, there are colors that are considered to be “cool”. These colors range between blue, purple and green. Most gray colors fall into the cool category as well.

Cool colors are given this designation because of their calming, soothing nature. They’re often associated with winter climates or water

5. Tints and Shades

---

You can also increase and decrease the lightness of a color, resulting in tints and shades of a hue, respectively.

Tints occur when white is applied to a color, adding or increasing the lightness of a hue.

Shades are created when black is added to a color, which decreases the lightness of a hue.

In HSLA, tints and shades are determined by the third number, which is L for lightness. This starts at 0% (black) and ranges to 100% (white).

Understanding how to use tints and shades of a color can help in creating a wider range of colors you could apply to your websites.

6. Color Contrast

---

Color contrast plays a major role in design as well. Colors opposite of each other on the color wheel tend to have a higher contrast. Colors that fall next to each other have a lower contrast to one another.

When applying color to your designs, it’s vital to ensure contrast levels provide clarity to the users for the elements on your page.

7. Color Schemes

Now that you’ve learned some basic color theory, let’s explore how you can select and apply color to your designs.

As a designer, it’s vital to understand how properly harmonizing colors will enable you to create elegant and usable designs. The color wheel comes in handy when deciding which colors might fit with one another, and using it can allow you to create a variety of color schemes.

Color schemes (or color palettes) are the result of pairing two or more colors together. The colors you select can make or break your design, however, knowing your options will put you in a better place to determine what is best for moving forward.

When deciding which colors to use in your design, there are four different color schemes to consider:

    1. Monochromatic
    2. Complementary
    3. Analogous
    4. Triadic

Each of these can work to your advantage depending on how you want your designs to display.

8. Monochromatic Designs

---

The most basic color scheme possible utilizes a single color with varying shades and tints to create a monochromatic palette.

Image of the color wheel showing a monochromatic palatte

Each color in the scheme is derived from the base color. While all elements within the design may feel similar, you can help eliminate the monotonous feeling with high contrast. This means when you are selecting a monochromatic color scheme, it’s important to select a much lighter and much darker shade of the main color.

These monochromatic color schemes are beneficial in that they provide an organized impression when applied to your designs. The use of a single color can provide an immediate sense of harmony.

Monochromatic schemes can also consist of black and white, with varying shades of gray, as you see in our current site.

9. Complementary Designs

---

As depicted in the diagram before, a complementary color scheme utilizes colors opposite from each other on the color wheel. For instance, if you were to select blue as your main color, it would create maximum contrast and intensity with orange.

Image of the color wheel selecting complementary colors: orange and blue

Complementary color palettes are very common in logos and uniforms. For example, the Los Angeles Lakers and Minnesota Vikings feature purples and yellows; the Chicago Bears and New York Mets incorporate blues and oranges. These complementary schemes provide a dramatic display of color, which can be applied to websites as well.

Lakers uniform showing contrast between purple and yellow

Complementary color schemes are popular on the web as they have high contrast in the color pairing.

They can seem clashing if complementary colors are used for large areas that are directly next to each other. However, when used strategically, they can draw attention to certain elements on the page that you want users to focus on

10. Analogous Color Schemes

---

Analogous color schemes apply three or more colors that are adjacent to each other on the color wheel. Typically, there is one dominant color (or hue), combined with a second to support, and a third to accent the color palette.

Image of the color wheel selecting analogous colors: blue, light blue, and green

Analogous color schemes create a visually pleasing and calming display. For instance, the color blue can pair nicely with both teal and green. However, analogous color schemes provide a low-contrast experience, since all colors fall in line with one another.

They shouldn’t be used for content that needs the user’s direct attention, but they can be used to create backgrounds that do not compete with the main content of the site.

11. Triadic Color Schemes

---

Triadic color schemes, much like complementary schemes, provide additional pops of color while allowing for some flexibility in the range you can use.

These consist of three colors that are equidistant from each other on the color wheel.

Image of the color wheel selecting triadic colors: dark blue, orange, and light green

For instance, if we stick with blue being our main color, we would then select red-orange and yellow-green as the pairing combinations. This creates a triangle of colors within the color wheel and gives us a wider palette to choose from.

Triadic color schemes are useful in that they create a sense of equality, vibrancy, and security in your designs.

12. Color Psychology

Even though we’ve explored multiple possibilities in terms of selecting color schemes, when it comes down to choosing the right combinations, a designer must determine the “feel” of their website.

Every color has a different context and meaning, and color psychology can impact how people perceive a design and relate to the colors used. Choosing the right colors can help nonverbally communicate the context and emotion of a product or service.

Each color has a specific meaning (both positive and negative), which can evoke emotions from a user. For instance, here’s a list of words often associated with colors:

1.  Red: Passionate, energetic, angry
2.  Orange: Optimistic, playful, fun
3.  Yellow: Welcoming, intellectual, impatient
4.  Green: Prosperous, balanced, growing
5.  Blue: Peaceful, loyal, cold
6.  Purple: Imaginative, royal, spiritual
7.  Gray: Unemotional, compromising
8.  White: Innocent, pure
9.  Black: Luxurious, powerful

It’s also important to note that color associations may vary from other parts of the world as well. However, when selecting colors, be sure to choose ones that help reinforce the overall message and tone of the website!

13. Best Practices

---

Now that we’ve talked through how to choose the proper colors for your designs, there are some best practices to consider as well.

Use neon colors sparingly. While the use of neon colors can feel hip, they are often hard on a user’s eyes.

Avoid vibrating colors. Vibrating colors result from pairing two colors with high saturation together that may be complementary to one another. It creates a glowing or moving effect, which also can be hard on one’s eyes.

For example, the red and green pairing that is common with Christmas cards is very glaring when presented on a screen. See the example to the right to notice how intense and distracting this pairing feels.

Use backdrops to separate vibrating colors. In the example, the white backdrop behind the green card reduces the space where the contrasting colors (red and green) are directly next to each other, but the overall effect is still too intense for most websites.

Avoid color combinations with insufficient contrast, including:

    1. Bright colors on top of bright colors
    2. Light colors on top of light colors
    3. Dark colors on top of dark colors

Even if there’s enough contrast in these pairings for the different colors to be legible, they likely won’t create enough contrast to attract the user’s attention.

Remember that most users skim websites! They are not reading every word and checking every menu—you need to guide the user to the most important content with good color choices.

14. Color Theory Review

---

Congratulations! You gained some knowledge on color theory and how to select colors to use within your websites.

Remember, the keys to choosing the right colors for your projects are:

    1. Using the color wheel as a basis for selecting colors
    2. Using a color scheme approach that promotes harmony
    3. Using colors that fit the context and emotion you are trying to display to users
    4. Using contrast to enhance the legibility of elements on the page
    5. Using shades and tints of a color to create flexibility
    Avoiding combinations that can cause issues for users

Following these guidelines allow you to create more elegant, engaging and beautiful websites!
