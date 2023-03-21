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
