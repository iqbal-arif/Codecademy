/*Quiz: Components Interacting

Complete the following code snippet so that the parent component passes “Hello from parent!” to the child component.
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