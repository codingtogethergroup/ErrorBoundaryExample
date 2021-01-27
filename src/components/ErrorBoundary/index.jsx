import * as React from "react";

export default class ErrorBoundary extends React.Component {
	state = { error: null };

	// This lifecycle is invoked after an error has been thrown by a descendant component.
	static getDerivedStateFromError(error) {
		return { error };
	}

	// componentDidCatch() is called during the “commit” phase, so side-effects are permitted.d
	componentDidCatch() {}

	render() {
		const { error, info } = this.state;
		const { FallbackComponent } = this.props;
		if (error) {
			return <FallbackComponent error={error} info={info} />;
		}

		return this.props.children;
	}
}
