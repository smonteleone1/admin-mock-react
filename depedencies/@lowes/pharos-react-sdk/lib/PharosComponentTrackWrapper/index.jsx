/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import Pharos from '@lowes/pharos';

const PharosComponentTrackWrapper = ({ name, children }) => {
    if (Pharos.trackEvent) {
        Pharos.trackEvent('componentLoad:Start', name);
    }

    useEffect(() => {
        if (Pharos.trackEvent) {
            Pharos.trackEvent('componentLoad:End', name);
        }
    }, []);
    return (
        <div>
            {children}
        </div>
    );
};

export default PharosComponentTrackWrapper;
