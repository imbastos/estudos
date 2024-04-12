export function InputRoot(props, children) {
    return (
        <div className={`input ${props.type}`}>

            <div className={props.tags}>
                {children}
            </div>
        </div>
    );
}