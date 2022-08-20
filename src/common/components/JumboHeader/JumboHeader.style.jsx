import styled from 'styled-components';

export const JumboHeaderElement = styled.div(() => `
    height: 95px;
    background-color: #ffffff;
    margin-top: 56px;
    .jumboHeader {
        padding: 37px 0px 20px 32px;
        display: flex;
    }
    .headerText {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        color: #000000;
    }
    .flex: {
		display: 'flex'
	},
	.search: {
		float: right;
		margin-left: auto;
		margin-right: 24px;
		margin-botttom: 18px;
	}

`);

export default JumboHeaderElement;
