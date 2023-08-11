/*
Q1: What is true about a component’s return statement? 
A1: The return statement can return a mix of HTML elements and custom React components.

Q2: Which code block is using the object defaultProp properly? 
A2: Excellent work! defaultProps can hold different types of values, try to see if you can figure out them all. 
*/
function Baptiste(props){
    render(){
        return <p>{props.text}</p>
    }
}
Baptiste.defaultProps = {text: 'Welcome'}

/*
Q3: True or False: Every component’s props object has a property named children.
A3: True; Congrats! If it’s a component, then it has a children property. 

Q4: How would you get an <Animal /> to render <h1>cat</h1>?
*/

function Animal(props) {
  if (props.type == 'cat') {
    return <h1>Meow Meow</h1>;
  } else if (props.type == 'dog') {
    return <h1>Arf Arf</h1>;
  }
}
/*
A4:You can't

*/