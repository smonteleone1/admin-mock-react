import * as React from 'react';

/**
 *
 * @param ref ref of cell
 * @param defaultValue default value of
 */
const useOverflowChildren = (ref, defaultValue) => {
  // True if the cell contents are larger then the cell and thus have been truncated
  const [hasOverflowChildren, setHasOverflowChildren] = React.useState(defaultValue);
  React.useEffect(() => {
    // Checks if the cell content is larger then the container and sets `hasOverflowChildren accordingly
    const calculateOverflow = () => {
      const cellContainer = ref.current.children[0];
      const cellContent = cellContainer.children[0];
      cellContent.classList.remove('overflow');
      const overflowing = cellContainer.offsetHeight < cellContent.scrollHeight || cellContainer.offsetWidth < cellContent.scrollWidth;

      if (overflowing) {
        cellContent.classList.add('overflow');
      }

      setHasOverflowChildren(overflowing);
    }; // Add event listener


    window.addEventListener('resize', calculateOverflow); // Call handler right away so state gets updated with initial window size

    calculateOverflow(); // Remove event listener on cleanup

    return () => window.removeEventListener('resize', calculateOverflow);
  }, [hasOverflowChildren, ref]);
  return hasOverflowChildren;
};

export { useOverflowChildren };
export default useOverflowChildren;