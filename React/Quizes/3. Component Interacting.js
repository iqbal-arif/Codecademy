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
