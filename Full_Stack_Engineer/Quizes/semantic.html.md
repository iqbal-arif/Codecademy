Q1: Why is the <div> tag not semantic?
A1: It provides no context as to what the content is inside of the tag.
This can be compared to a tag such as <footer> which is known to contain content at the bottom of the page.

Q2: What’s the difference between <embed> and <video>?
A2: <video>: can only used for video
<embed> : can be used for any type of media.
Embed can be used for files or external links such as a video from a different website.

Q3: Why is the code below incorrect?

```
<figcaption>
  <img src="sunset.jpg">
  <figure>Beautiful sunset</figure>
</figcaption>
```

A3: The use of <figure> nad <figcaption> needs to be reversed.

<figcaption> is used to insert text related to the content in the <figure> such as a description.

Q4: Which code snippet is the correct way to rewrite this in Semantic HTML?

```
<div id="header">
  <h1>Codecademy</h1>
</div>
```

A4:

``

<header>
    <h1>Codecademy</h1>
</header>
``

Q5: Why is the code below incorrect?

```
<audio src="AudioFile.mp3"/>
```

A5: <audio>is not a self closing tag and requires an opening and closing tag.
You can use src to link the audio file in the opening <audio> tag.

Q6: Which semantic tags complete the code?

  <section>
    <p>
        A robot is a machine designed to complete tasks faster, quicker, and more accurately than a human.
    </p>
  </section>
    <aside>
        <p>
            “We're going to become caretakers for the robots. That's what the next generation of work is going to be.”- Gray Scott
        </p>
    </aside>

Q7: Add the correct type of semantic tag:

<section>
  <h2>cars</h2>
      <article>
        <p>
            A car is so much more than a number, and yet enthusiasts and non-enthusiasts alike simply cannot resist the urge to brag or judge another’s wheels based on specifications alone.
        </p>
      </article>
</section>
