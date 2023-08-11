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