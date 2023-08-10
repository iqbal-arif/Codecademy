/*
Giving Default Values to props

Take a look at the Button component. Notice that on line 6, Button expects to receive a prop named text. The received text will be displayed inside of a <button> element.

What if nobody passes any text to Button?

If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.

You can make this happen by specifying a default value for the prop. There are three ways to do this!

The first method is adding a defaultProps static property to the component:

function Example(props) {
  return <h1>{props.text}</h1>
}
 
Example.defaultProps = {
  text: 'This is default text',
};
 

You can also specify the default value directly in the function definition:

function Example({text='This is default text'}) {
   return <h1>{text}</h1>
}
 

Lastly, you can also set the default value in the function body:

function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}
 

If an <Example /> doesn’t get passed any text, then it will display “This is default text”.

If an <Example /> does get passed some text, then it will display that passed-in text.

Instructions

1. In Button.js, give the text prop a default value.

Set the default value to 'Default Text of Big Button'. Then, retrieve the text prop between the <button> tags.

Run your code. The button’s appearance should change!

2. In App.js, give <Button /> the text attribute with the value "".

Your new prop should override the default, making the <button> element empty once again.

*/