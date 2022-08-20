import * as React from 'react';
declare const TabContext: React.Context<{
    selected: number;
    handleClick: (index: number, event: React.MouseEvent | React.KeyboardEvent) => void;
    handleKeyDown: (index: number, event: React.KeyboardEvent) => void;
    isOnLayer: boolean;
}>;
export default TabContext;
