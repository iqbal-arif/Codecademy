## Viewport Meta Tag

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
