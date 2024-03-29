## Grid and Spacing

1. Grid Columns

---

Columns are the vertical containers that span the width of the page. They can be dependent on each other, meaning they are used to organize related content such as a continuation of a paragraph. They can also be independent of each other, meaning they are used for organizing the layout of unrelated content such as a sidebar. This allows for the flexibility of organizing information.

Within a grid, content can span multiple columns. What this means is that a website does not need to maintain the same column layout throughout. For example, a section of a website with a 12 column grid can have content that spans 4 columns, three times.

As the designer, you have the option to maintain this layout throughout the website. Or you can choose to use various layouts, including having the content span the whole width of the grid, half the grid or only a small portion of the grid.

While we will talk about this in more detail in just a few exercises, columns are separated by gutters. This design term is referred to as the space or gap between two columns. No content can spill into the gutter unless it is using the next column.

Columns can also be used to push, or offset content. Say you want to only display content on the right 4 columns of a page while using a 12 column grid. To do this, you can easily offset the content by 8 columns so the content is pushed to those right 4 columns.

2. Grid Rows

---

Rows are the horizontal lines on a grid. Think of rows as invisible boxes that group content together by height. Rows are commonly used in web designs to group content together and re-order other content to allow for more whitespace.

For example, let’s say you have a set of items that all span the same amount of columns and you want them to align across the page without being disrupted by other elements. One way to achieve this outcome is to wrap the content in a row component. This will force any content, not inside of the row, to be pushed away.

Again, remember that a row can be used to force content away from an area that has remaining columns not used. What does this mean? Great question.

Let’s say our design uses a 12 column grid and we want one element to span seven columns. That means we still have five unfilled columns to either the left or the right side. Naturally, any new content added to our document will try and fill this unused space. However, by placing a row element around our component that spans 7 columns we can force any new content to start beneath our component and leave the remaining 5 columns empty.

3. Grid Gutters

---

Gutters make up the negative space between columns. This design element helps to provide a natural break between elements aligned horizontally, while also helping to break rows of content vertically.

Note, there will always be one less gutter than the total number of columns. For example, if you are designing on a 12 column grid, then you will only have 11 gutters, one for every gap that separates each column.

While there is no set standard for a gutter width, it’s best practice to select a size that visually separates horizontal columns but is significantly thinner than the width of a column. The same can be said for vertical gutters.

Moreover, vertical and horizontal gutters do not need to match in size for a given grid layout. This is because you as a designer may want more vertical spacing than horizontal spacing when separating elements on a page.

Remember, if the gutter space is too tight, it can be hard to visually tell where one element ends and another starts. On the other hand, if the gutter space is too large, the design can be hard to follow.

4. Responsive Grid

---

When designing web content, a designer needs to take into account the different screen-sizes a user might encounter and how that will affect a website’s layout. Many websites utilize responsive design, a set of techniques that allow a website’s content to shift based on the device or screen size. Because of these changes, responsive design requires a different number of total columns based on screen size, in order to accommodate content and keep it from being squished.

Consider your mobile, tablet and desktop devices. Now, think about their viewable areas. All are substantially different in size. Thus, it’s common practice in web design to create responsive grid sizes. On a large or desktop device you may start with a 12 column grid, but on a small or mobile device, you adjust the 12 column grid to a 4 column grid.

As a designer, responsive grid design enables you to maximize the content on the screen, ensuring a more accessible experience for users. Additionally, your design elements will have sufficient space to breathe and content can naturally flow across the page.

5. Whitespace

---

Space is an important aspect of creating balanced and harmonious layouts in web design. As a designer, it’s important to understand how space can enhance as well as hurt your designs.

Whitespace, or negative space, refers to the emptiness between elements, whether that’s in the gutter of the columns, or additional padding around a block of text. As a designer, don’t be afraid of using space to enhance the usability of your site and prioritize the content.

Let’s explore some examples of good whitespace. If you look at the examples in the workspace, you will notice that the website on the left embraces whitespace on its landing page. It focuses the user’s attention solely on the primary action, which is searching for content. In this case, the whitespace is white in color as well. However, whitespace isn’t always going to be white.

In the example on the right, you’ll notice that too much whitespace can negatively impact the flow of your site. By including too much spacing in between elements, it can cause issues for users trying to navigate seamlessly through the content.

Whitespace is broken up into passive and active, which we’ll explore in the next two exercises!

    5.1 Passive Whitespace

    The first type of whitespace we will discuss is called passive whitespace or micro whitespace. Used to improve the aesthetics of the layout without guiding the user through a specific reading, flow, or content order; passive whitespace is sometimes referred to as the unconsidered space. The most frequent use of passive whitespace comes within text elements.

    Different font families have varying amounts of passive whitespace and you can control aspects of them within your design by altering CSS properties such as line-height or margin when setting type.

    By adjusting the space between your lines of text, you can improve the design’s overall legibility and balance.

    If a site’s text is too tight or lacks sufficient margin below headings and paragraphs, it can be hard for users to consume the content. However, if the site’s text is too spaced out, it can make it just as hard to read.

    Finding a healthy balance between text that lacks sufficient spacing and text that has too much is an important task for designers.

    5.2 Active Whitespace

    Unlike passive whitespace, which occurs more naturally, active whitespace is intentional. Also called macro whitespace, active whitespace refers to enhancing the overall page structure through space to emphasize content or guide users from one point to the next.

    By adding active whitespace to a site’s design, we can spread our different sections out. This technique helps guide the user through the page’s content more effectively, allowing users to consume and absorb content more easily.

    Active whitespace comes in many forms. But traditionally, it is achieved by adding space between a site’s elements. For instance, adding space to an article’s sidebar helps to visually separate the content from the page’s main content.

    Additionally, this type of whitespace allows readers to quickly understand what they should be focusing on versus what is just supplementary details.

## Review

Congratulations! You should have an understanding of grid structure, the components that make up a grid, and how to use them to properly space elements within your design.

1. Remember, the reasons we design using grids are:

   a. Promote consistency within our designs
   b. Properly align elements on our page
   c. Provide ample spacing between content

2. Remember a grid is made up of:

   a. Columns
   b. Gutters
   c. Margins

3. Spacing is incredibly important within a design to ensure:

   a. Elements have ample room to breathe
   b. Denote emphasis on certain parts of a page
   c. Promote harmonious patterns and rhythms within your designs

Following these guidelines will allow you to create elegant and usable sites!
