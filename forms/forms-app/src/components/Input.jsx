export function Input(props) {
    return (
        <div className={`input ${props.type}`}>

            <div className="outline style-1 inputText default iconLeft">
                <input id="0" type="text" placeholder="Placeholder" />
                <label htmlFor="0">Label</label>
                <Heart />
            </div>
        </div>
    );
}