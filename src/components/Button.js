
const Button = (props) => {

    return (
        <button onClick={props.function} className={props.className}>{props.label}</button>
    )
}

export default Button