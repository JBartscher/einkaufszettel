import React, {ErrorInfo} from "react";

type ErrorProps = {
}

type ErrorState = {
    hasError: Boolean
    error: Error
    errorInfo: ErrorInfo,
}

export default class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {

    constructor(props: ErrorProps) {
        super(props);
        this.state = { hasError: false, error: new Error(), errorInfo: {componentStack: ''} };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo,
        });

        console.log(error, errorInfo); // TODO: Log error info somewhere
    }

    render() {
        const { hasError, error, errorInfo } = this.state;
        const { children } = this.props;
        if (!hasError) return children;

        return (
            <div className="w-full h-full bg-red-400">
                <h2 className="text-center text-4xl text-red-800">Something went wrong!</h2>
                <p>{error}</p>
                <p>{errorInfo}</p>
            </div>
        );
    }
}
