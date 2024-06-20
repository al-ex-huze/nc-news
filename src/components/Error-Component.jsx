const ErrorComponent = ({ error }) => {
    return (
        <div className="Error">
            <p>{error.message}: </p>
            <h3>{error.response.data.msg}</h3>
        </div>
    );
};

export default ErrorComponent;
