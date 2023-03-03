## Introduction to Color

1. Colors in CSS can be described in three different ways:

---

1.  Named colors — English words that describe colors, also called keyword colors
2.  RGB — numeric values that describe a mix of red, green, and blue
3.  HSL — numeric values that describe a mix of hue, saturation, and lightness

4.  Hexadecimal

---

One syntax that we can use to specify colors is called hexadecimal. Colors specified using this system are called hex colors. A hex color begins with a hash character (#) which is followed by three or six characters. The characters represent values for red, blue and green.

darkseagreen: #8FBC8F
sienna: #A0522D
saddlebrown: #8B4513
brown: #A52A2A
black: #000000 or #000
white: #FFFFFF or #FFF
aqua: #00FFFF or #0FF

3. RGB Colors

---

There is another syntax for representing RGB values, commonly referred to as “RGB value” or just “RGB”, that uses decimal numbers rather than hexadecimal numbers, and it looks like this:

h1 {
color: rgb(23, 45, 23);
}

Each of the three values represents a color component, and each can have a decimal number value from 0 to 255. The first number represents the amount of red, the second is green, and the third is blue. These colors are exactly the same as hex, but with a different syntax and a different number system.

4. Hex and RGB

---

The hexadecimal and rgb color system can represent many more colors than the small set of CSS named colors. We can use this new set of colors to refine our web page’s style.

In both hex and RGB, we have three values, one for each color. Each can be one of 256 values. Specifically, 256 _ 256 _ 256 = 16,777,216. That is the amount of colors we can now represent. Compare that to the roughly 140 named CSS colors!

5. Hue, Saturation, and Lightness

---

The RGB color scheme is convenient because it’s very close to how computers represent colors internally. There’s another equally powerful system in CSS called the hue-saturation-lightness color scheme, abbreviated as HSL.

The syntax for HSL is similar to the decimal form of RGB, though it differs in important ways. The first number represents the degree of the hue, and can be between 0 and 360. The second and third numbers are percentages representing saturation and lightness respectively. Here is an example:

color: hsl(120, 60%, 70%);

    1. Hue is the first number. It refers to an angle on a color wheel. Red is 0 degrees, Green is 120 degrees, Blue is 240 degrees, and then back to Red at 360. You can see an example of a color wheel below.

color wheel

    2. Saturation refers to the intensity or purity of the color. The saturation increases towards 100% as the color becomes richer. The saturation decreases towards 0% as the color becomes grayer.

    3. Lightness refers to how light or dark the color is. Halfway, or 50%, is normal lightness. Imagine a sliding dimmer on a light switch that starts halfway. Sliding the dimmer up towards 100% makes the color lighter, closer to white. Sliding the dimmer down towards 0% makes the color darker, closer to black.

HSL is convenient for adjusting colors. In RGB, making the color a little darker may affect all three color components. In HSL, that’s as easy as changing the lightness value. HSL is also useful for making a set of colors that work well together by selecting various colors that have the same lightness and saturation but different hues.

6. Opacity and Alpha

---

All of the colors we’ve seen so far have been opaque, or non-transparent. When we overlap two opaque elements, nothing from the bottom element shows through the top element. In this exercise, we’ll change the opacity, or the amount of transparency, of some colors so that some or all of the bottom elements are visible through a covering element.

To use opacity in the HSL color scheme, use hsla instead of hsl, and four values instead of three. For example:

color: hsla(34, 100%, 50%, 0.1);

The first three values work the same as hsl. The fourth value (which we have not seen before) is the alpha. This last value is sometimes called opacity.

Alpha is a decimal number from zero to one. If alpha is zero, the color will be completely transparent. If alpha is one, the color will be opaque. The value for half-transparent would be 0.5.

You can think of the alpha value as, “the amount of the background to mix with the foreground”. When a color’s alpha is below one, any color behind it will be blended in. The blending happens for each pixel; no blurring occurs.

The RGB color scheme has a similar syntax for opacity, rgba. Again, the first three values work the same as rgb and the last value is the alpha. Here’s an example:

color: rgba(234, 45, 98, 0.33);

A little unconventional, but still worth mentioning is how hex colors can also have an alpha value. By adding a two-digit hexadecimal value to the end of the six-digit representation (#52BC8280), or a one-digit hexadecimal value to the end of the three-digit representation (#F003), you can change the opacity of a hexadecimal color. Hex opacity ranges from 00 (transparent) to FF (opaque).

Alpha can only be used with HSL, RGB, and hex colors; we cannot add the alpha value to name colors like green.

There is, however, a named color keyword for zero opacity, transparent. It’s equivalent to rgba(0, 0, 0, 0), and it’s used like any other color keyword:

## color: transparent;

## Review

We’ve completed our extensive tour of the colors in CSS! Let’s review the key information we’ve learned.

There are four ways to represent color in CSS:

    Named colors—there are more than 140 named colors, which you can review here on MDN.
    1. Hexadecimal or hex colors
        Hexadecimal is a number system that has sixteen digits, 0 to 9 followed by “A” to “F”.
        Hex values always begin with # and specify values of red, blue, and green using hexadecimal numbers such as #23F41A.
        Six-digit hex values with duplicate values for each RGB value can be shorted to three digits.
    2. RGB
        RGB colors use the rgb() syntax with one value for red, one value for blue and one value for green.
        RGB values range from 0 to 255 and look like this: rgb(7, 210, 50).
    3. HSL
        HSL stands for hue (the color itself), saturation (the intensity of the color), and lightness (how light or dark a color is).
        Hue ranges from 0 to 360 and saturation and lightness are both represented as percentages like this: hsl(200, 20%, 50%).
    You can add opacity to color in RGB and HSL by adding a fourth value, a, which is represented as a percentage.
