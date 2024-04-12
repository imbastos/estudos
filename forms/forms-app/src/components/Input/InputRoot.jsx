export function InputRoot(children, props) {
    return (
        <div className={`input ${props.type}`}>

            <div className={props.tags}>
                <input id="0" type="text" placeholder={props.placeholder} />
                <label htmlFor="0">{props.label}</label>
                {/* {children} */}
            </div>
        </div>
    );
}