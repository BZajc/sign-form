function LoginButton({ onClick, disabled }) {
    return <div>
        <button className="form__button form__button--login" onClick={onClick} disabled={disabled}>Login</button>
    </div>
}

export default LoginButton