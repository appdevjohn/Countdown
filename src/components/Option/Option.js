import classes from './Option.module.css';

const Option = props => {
    const optionPickedHandler = (option) => {
        props.onSelect(option);
    }

    const options = props.options.map(op => {
        return <div key={op} onClick={() => optionPickedHandler(op)}>{op}</div>
    })

    return (
        <div className={classes.Option}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.optionGrid}>{options}</div>
        </div>
    )
}

export default Option;