/*Quiz: Components Interacting

Q1. Complete the following code snippet so that the parent component passes “Hello from parent!” to the child component.
*/
function ParentComponent() {
  return (
    <div>
      <ChildComponent message = "Hello from parent" />
    </div>
  );
}
 
function ChildComponent(props) {
  return <p>{props.message}</p>;
}

/*
Q2: How would you get an <Animal /> to render <h1>cat</h1>?
A2: You Can't
*/
function Animal(props) {
  if (props.type == 'cat') {
    return <h1>Meow Meow</h1>;
  } else if (props.type == 'dog') {
    return <h1>Arf Arf</h1>;
  }
}

/*
Q3: In React, what happens if there are no props passed to a component?
A3: The component will use default values for any missing props.

Q4: What does props.children return?
A4: Everything between a component's opening and closing tags.

Q5: In React, which of the following is true about component props?
A5: Props are accessible in a component via the props object, where prop names are keys and their values are the values passed in via JSX.

Q6: Which of the following is a valid example of a function component in React?
A6: Nice job! This function component returns a mixture of HTML and custom React component.
*/

function MyApp(){
  return(
    <div>
      <h1> Hello World</h1>
      <p>This is a paragraph</p>
      <MyComponent />
    </div>
  )
}