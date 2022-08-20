/* eslint-disable import/no-unresolved */
import React from 'react';
import Pharos from '@lowes/pharos';

export default class PharosTrackErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    // eslint-disable-next-line
    componentDidCatch (error, info) {
        if (Pharos.trackError) {
            Pharos.trackError(error.stack);
        }
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children || null;
    }
}
