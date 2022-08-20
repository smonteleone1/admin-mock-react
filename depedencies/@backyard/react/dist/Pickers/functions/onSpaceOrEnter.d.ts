declare const onSpaceOrEnter: (innerFn: () => void, onFocus?: (event: React.KeyboardEvent<any>) => void) => (event: React.KeyboardEvent) => void;
export { onSpaceOrEnter };
export default onSpaceOrEnter;
