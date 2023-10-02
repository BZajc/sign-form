function RegisterButton({ onClick, disabled }) {
    return <div>
        <button className="form__button form__button--register" onClick={onClick} disabled={disabled}>Register</button>
    </div>
}

export default RegisterButton