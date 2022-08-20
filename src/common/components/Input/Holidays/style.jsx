import styled from 'styled-components';

export const HolidayDiv = styled.div(() => `
    .head {
        display: flex;
        margin: 15px;

    },
    .btn {
        float: right;
        margin-left: auto;
        cursor: pointer;

    },
    .input {
        display: flex;
        margin: 5px;
    },
    .grid {
        display: grid;
        grid-template-columns: 50% 50%;
    },
    .p {
        font-family: sans-serif;
        font-weight: 500;
        font-size: 14px;
        margin-left: 16px;
    },
   .border {
        border: 1px solid #126BD6;
        padding: 5px;
        border-radius: 4px;
    },
    .delete {
        margin: auto;
    }
`);

export default HolidayDiv;
