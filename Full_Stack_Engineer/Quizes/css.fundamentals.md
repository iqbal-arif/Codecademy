Q1: Which of the following best describes the concept of CSS selector specificity?
A1: Specificity refers to how a browser decides which styles to display when there are multiple styles defined that could apply to the same element.

Q2: What does the <style> HTML tag allow?
A2: Writing one or more CSS rules in CSS syntax inside an HTML file.
Correct! Code inside <style> tags is written in CSS syntax and can include many selectors and rulesets.

Q3: Complete the code below to link a CSS file called main.css to an HTML file.
A3: <link rel="stylesheet" href="main.css" />

Q4: What is the correct syntax to style multiple unrelated selectors?
A4: .nav-menu, p {}

Q5: The following HTML code attempts to use inline styling to change the color of the paragraph text, but fails to do so. Why?

<p color="red;">I am learning to code!</p>

A5: The color attribute is invalid. It should be changed to style and then set equal to colors: red;:<p style="color:red;">
The style attribute is used to add inline styles to HTML elements.

Q6: What is the main difference between inline styles and the <style> tag?
A6: Inline styles directly modify individual HTML elements using a style attribute, whereas teh <style> tag allows you to wrote CSS in a dedicated section of the HTML file.

Q7: The following code attempts to style a paragraph using the <style> tag, but fails to do so. Why?

<head>
  <style>
    <p style="color:red;">I'm learning to code!</p>
  </style>
</head>
A7: The contents of the <style> tag must be CSS code, not HTML code. The <p> will not appear at all.

Q8: What is the purpose of the HTML <link> tag when it comes to styling a page?
A8: To link a specific stylesheet file to an HTML file so that teh styles get applied on the page.

 <link> is used to connect stylesheets to HTML files.

Q9: What is the most specific selector in the code below?

p {

}

#side-bar {

}

.main-content {

}

.main-content p {

}

A: #side-bar{}
ID selectors like #side-bar are more specific than any selector only using element type and/or class selectors.

Q10. Which of the following statements is correct?
A10: IDs are more specific than classes and tags.
Correct! IDs are the most specific, because they should only be used on a single element.

Q11: What is the correct syntax to select an element inside another element?
A11: .main-list li{}
Correct! Using a space between selectors selects elements of the second selector nested inside the first.

Q12: Separating HTML and CSS into their own files helps accomplish which of the following?
A12: Separating HTML structure from CSS style makes the code in both languages easier to read and maintain.
