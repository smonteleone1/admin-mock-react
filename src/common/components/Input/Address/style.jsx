import styled from 'styled-components';

export const AddressDiv = styled.div(() => `
    .container {
        width: 800px;
        height: 324px;
        margin: 8px;
        margin-top: 16px;
        padding: 16px;
        background-color: #FFFFFF;
        border-radius: 6px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #DADCE0;
    },
    .title {
        margin-bottom: 16px;
        margin-left: 16px;
        font-size: 20px;
        font-family: sans-serif;
    },
    .nodeDetails {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        margin-left: 16px;

    },
    .inputBox {
        margin-right: 16px;
        margin-bottom: 24px;
        text-overflow: ellipsis;
        over-flow: hidden;
    },
   .address {
        display: grid;
        grid-template-columns: 30% 20% 20% 20%;
        margin-bottom: 20px;
        margin-left: 16px;
    },
    .form {
        margin-top: 20px;
    },
    .temp {
        border-bottom: 1px solid #DADCE0;
    },
    .addressBox {
        margin-left: 16px;
    },
    .select {
        width: 125px;
        height: 50px;
        margin-right: 15px;
        border-radius: 6px;
        color: #000000 60%;
    }
`);

export default AddressDiv;
