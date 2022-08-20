import styled from 'styled-components';

export const HeaderDiv = styled.div(() => `
    display: flex;
    .lowesStyle {
      width: 60px;
      height: 27px;
      margin-left: 30px;
      margin-top: 15px;
    }
    .applicationLogo {
        margin-top: 11.5px;
        margin-left: 16px
    }
    .appName {
        padding-left: 18px;
        width: 116px;
        height: 14px;
        font: normal normal lighter 12px/14px Roboto;
        text-align: center;
        letter-spacing: 0px;
        color: #F7F7F7;
        text-transform: uppercase;
        opacity: 1;
        cursor: pointer;
    }
    .appHeading {
        padding-top: 8px;
        width: 210px;
        height: 21px;
        color: #F7F7F7;
        font: normal normal bold 18px/14px Roboto;
        text-align: center;
        letter-spacing: 0px;
        text-transform: uppercase;
        cursor: pointer;
    }
    .searchBar input,
.searchBtn,
.searchBtn:before,
.searchBtn:after {
  transition: all 0.25s ease-out;
}
.searchBar input,
.searchBtn {
	width: 3em;
  height: 3em;
}
.searchBar input:invalid:not(:focus),
.searchBtn {
  cursor: pointer;
}
.searchBar,
.searchBar input:focus,
.searchBar input:valid  {
  width: 300px;
}
.searchBar input:focus,
.searchBar input:not(:focus) + .searchBtn:focus {
  outline: transparent;
}
.searchBar {
	/* margin: auto;
	padding: 1.5em; */
	justify-content: flex-end;
  max-width: 390px;
  display: flex;
  margin-top: 10px !important;
}
.searchBar input {
	background: transparent;
  border-radius: 1.5em;
  border: 5px solid white;
	box-shadow: 0 0 0 0.4em #17233D inset;
	padding: 0.75em;
	transform: translate(0.5em,0.5em) scale(0.5);
	transform-origin: 100% 0;
	-webkit-appearance: none;
	-moz-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  margin-top: 5px;
}
.searchBar input::-webkit-search-decoration {
	-webkit-appearance: none;
}
.searchBar input:focus,
.searchBar input:valid {
	background: #fff;
	border-radius: 0.375em 0 0 0.375em;
	box-shadow: 0 0 0 0.1em #d9d9d9 inset;
  transform: scale(1);
  border: 0px;
  width: 400px;
  height: 40px;
  margin-top: 0px;
  padding-left: 20px;
}
.searchBtn {
  background: white;
	border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
	padding: 0.8em;
	position: relative;
	transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.09);
  transform-origin: 0 50%;
}
.searchBtn:before,
.searchBtn:after {
	content: "";
	display: block;
	opacity: 0;
  position: absolute;
}
.searchBtn:before {
	border-radius: 50%;
	box-shadow: 0 0 0 0.2em #f1f1f1 inset;
	top: 0.75em;
	left: 1.25em;
	width: 1.2em;
  height: 1.2em;
}
.searchBtn:after {
	background: #f1f1f1;
	border-radius: 0 0.25em 0.25em 0;
	top: 55%;
	left: 50.5%;
	width: 0.75em;
	height: 0.25em;
	transform: translate(0.25em,0) rotate(45deg);
  transform-origin: 0 50%;
}
.searchBtn span {
	display: inline-block;
	overflow: hidden;
	width: 1px;
	height: 1px;
}

.searchBar input:focus + .searchBtn,
.searchBar input:valid + .searchBtn {
	background: #1145BB;
	border-radius: 0 0.375em 0.375em 0;
  transform: scale(1);
  padding-left: 40px;
  margin-right: 32px;
}
.searchBar input:focus + .searchBtn:before,
.searchBar input:focus + .searchBtn:after,
.searchBar input:valid + .searchBtn:before,
.searchBar input:valid + .searchBtn:after {
	opacity: 1;
}
.searchBar input:focus + .searchBtn:hover,
.searchBar input:valid + .searchBtn:hover,
.searchBar input:valid:not(:focus) + .searchBtn:focus {
	background: #0c48db;
}
.searchBar input:focus + .searchBtn:active,
.searchBar input:valid + .searchBtn:active {
	transform: translateY(1px);
}
.profileImage {
    margin-top: 14px;
    margin-right: 5px;
    padding-top: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: white;
    font: normal normal bold 17px/20px Roboto;
    color: #17233D;
    text-align: center;
    cursor: pointer;
  }
  .pointerPaper{
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom: 20px solid rgb(255, 255, 255);
    position: relative;
    top: -50px;
}
.notificationIcon {
  margin-right: 40px;
  margin-top: 18px;
  width: 30px;
  height: 25px;
  cursor: pointer
}
.arrowDown {
  margin-top: 16px;
  margin-right: 42px;
  cursor: pointer
}
`);

export default HeaderDiv;
