/// <reference types="react" />
import type { Hooks } from 'react-table';
import type { DataTableProps } from '../DataTable';
declare const HighlightText: ({ text, highlight }: {
    text: String;
    highlight: string;
}) => JSX.Element;
declare const addHighlightCell: <Data extends object = {}>(hooks: Hooks<Data>) => void;
declare const useHighlightCell: (disableFuzzyHighlight: DataTableProps['disableFuzzyHighlight']) => <Data extends object = {}>(hooks: Hooks<Data>) => void;
export { useHighlightCell, addHighlightCell, HighlightText };
export default useHighlightCell;
