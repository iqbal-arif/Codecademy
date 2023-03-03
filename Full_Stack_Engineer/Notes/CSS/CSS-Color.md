## Introduction to Color

1. Colors in CSS can be described in three different ways:

   1. Named colors — English words that describe colors, also called keyword colors
   2. RGB — numeric values that describe a mix of red, green, and blue
   3. HSL — numeric values that describe a mix of hue, saturation, and lightness

2. Hexadecimal

One syntax that we can use to specify colors is called hexadecimal. Colors specified using this system are called hex colors. A hex color begins with a hash character (#) which is followed by three or six characters. The characters represent values for red, blue and green.

darkseagreen: #8FBC8F
sienna: #A0522D
saddlebrown: #8B4513
brown: #A52A2A
black: #000000 or #000
white: #FFFFFF or #FFF
aqua: #00FFFF or #0FF

3. RGB Colors

There is another syntax for representing RGB values, commonly referred to as “RGB value” or just “RGB”, that uses decimal numbers rather than hexadecimal numbers, and it looks like this:

h1 {
color: rgb(23, 45, 23);
}

Each of the three values represents a color component, and each can have a decimal number value from 0 to 255. The first number represents the amount of red, the second is green, and the third is blue. These colors are exactly the same as hex, but with a different syntax and a different number system.

4. Hex and RGB

The hexadecimal and rgb color system can represent many more colors than the small set of CSS named colors. We can use this new set of colors to refine our web page’s style.

In both hex and RGB, we have three values, one for each color. Each can be one of 256 values. Specifically, 256 _ 256 _ 256 = 16,777,216. That is the amount of colors we can now represent. Compare that to the roughly 140 named CSS colors!
