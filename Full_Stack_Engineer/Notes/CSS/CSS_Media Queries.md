## 1. Viewport Meta Tag

Thus far, we have been learning about creating responsive web designs with CSS. However, in order for us to enable this responsive CSS to work, we need to get familiar with the HTML viewport meta tag!

Let’s start with the viewport, which is the total viewable area for a user; this area varies depending on device. The viewport is smaller on a mobile device and larger on a desktop.

Based on the size of the viewport, the meta tag (<meta>) is used to instruct the browser on how to render the webpage’s scale and dimensions. For instance, say if a web page is 960px and the device is 320px wide. Adding the viewport meta tag will squish the content down until it is 320px — there is no need for the user to zoom out and view the whole page!

Inside the <head> element, we will find where the <meta> tag syntax is implemented:

<!DOCTYPE html>
<html lang="en"> 
  <head> 
    ...
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ...
  </head>

We can break down the added <meta> tag into the following essential components:

    1. the name="viewport" attribute: tells the browser to display the web page at the same width as its screen
    2. the content attribute: defines the values for the <meta> tag, including width and initial-scale
    3. the width=device-width key-value pair: controls the size of the viewport in which it sets the width of the viewport to equal the width of the device
    4. the initial-scale=1 key-value pair: sets the initial zoom level (Read more about scale at MDN’s viewport documentation)

The viewport meta tag allows our web pages to be responsive and adapt a site’s contents to the users’ screen size. We’ll explore more on actually implementing this responsiveness in the later exercises, but for now, we need to first include the meta tag in our HTML file!

## 2. Media Queries

CSS uses media queries to adapt a website’s content to different screen sizes. With media queries, CSS can detect the size of the current screen and apply different CSS styles depending on the width of the screen.

@media only screen and (max-width: 480px) {
body {
font-size: 12px;
}
}

The example above demonstrates how a media query is applied. The media query defines a rule for screens smaller than 480 pixels (approximately the width of many smartphones in landscape orientation).

Let’s break this example down into its parts:

    1. @media — This keyword begins a media query rule and instructs the CSS compiler on how to parse the rest of the rule.
    2. only screen — Indicates what types of devices should use this rule. In early attempts to target different devices, CSS incorporated different media types (screen, print, handheld). The rationale was that by knowing the media type, the proper CSS rules could be applied. However, “handheld” and “screen” devices began to occupy a much wider range of sizes and having only one CSS rule per media device was not sufficient. screen is the media type always used for displaying content, no matter the type of device. The only keyword is added to indicate that this rule only applies to one media type (screen).
    3. and (max-width : 480px) — This part of the rule is called a media feature, and instructs the CSS compiler to apply the CSS styles to devices with a width of 480 pixels or smaller. Media features are the conditions that must be met in order to render the CSS within a media query.
    4. CSS rules are nested inside of the media query’s curly braces. The rules will be applied when the media query is met. In the example above, the text in the body element is set to a font-size of 12px when the user’s screen is less than 480px

## 3. Range

Specific screen sizes can be targeted by setting multiple width and height media features. min-width and min-height are used to set the minimum width and minimum height, respectively. Conversely, max-width and max-height set the maximum width and maximum height, respectively.

By using multiple widths and heights, a range can be set for a media query.

@media only screen and (min-width: 320px) and (max-width: 480px) {
/_ ruleset for 320px - 480px _/
}

The example above would apply its CSS rules only when the screen size is between 320 pixels and 480 pixels. Notice the use of a second and keyword after the min-width media feature. This allows us to chain two requirements together.

The example above can be written using two separate rules as well:

@media only screen and (min-width: 320px) {
/_ ruleset for >= 320px _/
}

@media only screen and (min-width: 480px) {
/_ ruleset for >= 480px _/
}

The first media query in the example above will apply CSS rules when the size of the screen meets or exceeds 320 pixels. The second media query will then apply CSS rules when the size of the screen meets or exceeds 480 pixels, meaning that it can override CSS rules present in the first media query or apply additional CSS rules that are not already present in the first.

Both examples above are valid, and it is likely that you will see both patterns used when reading another developer’s code.
