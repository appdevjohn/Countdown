import classes from './Option.module.css';

const Option = props => {
    const optionPickedHandler = (option) => {
        props.onSelect(option);
    }

    const options = props.options.map(op => {
        let className = classes.optionChoice;
        if (op === props.selected) {
            className = [classes.optionChoice, classes.selected].join(' ');
        }
        return <div key={op} className={className} onClick={() => optionPickedHandler(op)}>{op}</div>
    });

    const offset = [];
    for (let i = 0; i < props.offset || 0; i++) {
        offset.push(<div key={i}></div>);
    }

    return (
        <div className={classes.Option}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.optionGrid} style={{gridTemplateColumns: 'repeat(' + props.columns + ', 1fr)'}}>
                {offset}
                {options}
            </div>
        </div>
    )
}

export default Option;