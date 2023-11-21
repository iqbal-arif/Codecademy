1. Authorization Form

---

A client just called you to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.

They’ve asked you to hide their website’s contact page behind a password form. In this project, you’ll accomplish this by creating a React component to set up a simple authorization layer.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Let’s get started!

Setting Up

1. Click Save to see the current state of things.

The contact info in the browser looks fine, but it should be hidden until you enter a password!

Look in Contact.js. You can see a Contact function component. Inside is a function called handleSubmit(), which will be responsible for authorizing the user into the system.

There’s a lot of logic already here. As we progress, you’ll start learning what useState and such is. For now, just know that you can check whether a user has entered the right password by checking if authorized is true.

2. Let’s look at the <h1></h1> tags in the return statement.

Right now, the <h1> element displays the text Contact. If a user hasn’t been authorized, then you want the <h1> element to display Enter the Password instead.

Using what you know of conditionals in components, make the <h1> element display "Contact" only if authorized is true. If authorized is false, then the <h1> element should display "Enter the Password".

3. Let’s check to see if that last step is working properly.

For now, the browser should say, “Enter the Password”. This is because authorized has the initial value of false.

Edit line 5 so that it has useState(true) instead of useState(false) for now. You should see that the text now says “Contact”. Don’t worry about how useState works—we’ll go over it in a future React lesson.

If it works, then make sure to change it back to useState(false) before moving on.

The Login Form 4. If the user isn’t authorized, then you want them to see a login form into which they can enter a password. Let’s make that login form!

Before the return statement but after the handleSubmit() function, declare a new variable named login.

Set login equal to a JSX <form></form> element. This <form></form> is going to have multiple children, so wrap it in parentheses!

Give the <form></form> an attribute of action="#" to make sure it does not redirect.

5. Good! Now let’s give your form some <input />s for the user to fill out.

In between the <form></form> tags, write two <input /> tags. Give the first <input /> two attributes:

```
    type="password"
    placeholder="Password"
```

Give the second <input /> one attribute: type="submit".

The Contact Info 6. Now, let’s hide the contact info.

After your login variable, declare another variable named contactInfo. Set it equal to empty parentheses:

```
const contactInfo = (
);
```

Make sure it is still inside the function component and before the return statement.

Next, move the <ul></ul> element in the return statement in between the parentheses we just created for contactInfo!

7. Great! By saving two JSX expressions as variables, you are ready to toggle between them.

In the component’s return statement, make a new line right below the <h1></h1> element. On this new line, use a ternary operator. If authorized is true, make the ternary return contactInfo. Otherwise, make the ternary return login.

Handling the Submit

8. Within the Contact function component, you see a function named handleSubmit().

This function will check whether a submitted password is equal to 'swordfish'. If it is, then authorized will become true.

You need handleSubmit to get called whenever a user clicks the submit button.

Give the <form></form> element an onSubmit attribute. Set the attribute’s value equal to the handleSubmit function.

9. Try entering an incorrect password and hitting “Submit”. Nothing should happen.

Now try entering “swordfish”. The website should reveal the contact info!
