Q1: What is the purpose of a media query?
A1: Media queries allow websites to alter their CSS, often to resize and reorganize elements so that the website appears correctly on any devices.
Correct! Media queries are useful when we want to modify web pages depending on user device type.

Q2: Which of the following requirements must be met so that the media query below applies its corresponding CSS rules?

@media only screen and (max-width: 480px) and (min-resolution: 150dpi) {
/_ CSS rules _/
}

A2: A browser with a width below 480px and a screen resolution above 150dpi.
Correct! The browser’s width and dpi is within the specific range of the media query’s constraints. **and** means both requirements must met.

Q3: What mistakes are present in the media query code below, if any?

@media only for screen and (max-width: 480px) {

}

A3: The **for** keyword is not used in a media query.
Correct! The for keyword is not used in a media query.

Q4: What browser dimensions will meet the media query below?

@media only screen and (min-width: 200px) and (max-width: 600px) {

}

A4: A browser with a width of 250px and a height of 750px.

Q5: What is a responsive website?
A5: A website that alters its styles depending on the dimensions of the browser.
