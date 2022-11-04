import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
  errorInfo: string;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    errorInfo: "",
  };

  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo): State {
    return { hasError: true, errorInfo: errorInfo.componentStack };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center">
          <h3 className="font-medium">Something went wrong...</h3>
          {this.state.errorInfo.length !== 0 && (
            <p>{`Please restart the page or contact the service team to resolve this issue. Error: ${this.state.errorInfo}`}</p>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
