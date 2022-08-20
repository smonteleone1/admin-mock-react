"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const jsonDiff = require("json-diff");
const Convert = require("ansi-to-html");
const ExpansionPanel_1 = require("@material-ui/core/ExpansionPanel");
const ExpansionPanelSummary_1 = require("@material-ui/core/ExpansionPanelSummary");
const ExpansionPanelDetails_1 = require("@material-ui/core/ExpansionPanelDetails");
const Button_1 = require("@material-ui/core/Button");
const Typography_1 = require("@material-ui/core/Typography");
const ExpandMore_1 = require("@material-ui/icons/ExpandMore");
const Tabs_1 = require("@material-ui/core/Tabs");
const Tab_1 = require("@material-ui/core/Tab");
const AppBar_1 = require("@material-ui/core/AppBar");
const Box_1 = require("@material-ui/core/Box");
const webTelemetryMockData_1 = require("../mock/webTelemetryMockData");
const { document } = window;
const convertToHtml = new Convert();
const expansionPanelList = [];
let addToView;
const ValidatePayload = (props) => {
    const panelList = props.expansionPanel.map((currentPayload, index) => {
        const dataToCompare = webTelemetryMockData_1.default;
        const diffHTML = jsonDiff.diffString(dataToCompare, currentPayload.data, undefined, { keysOnly: true });
        return (React.createElement(ExpansionPanel_1.default, { key: `${currentPayload.url}${index}` },
            React.createElement(ExpansionPanelSummary_1.default, { expandIcon: React.createElement(ExpandMore_1.default, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                React.createElement(Typography_1.default, null,
                    " ",
                    currentPayload.url,
                    " ")),
            React.createElement(ExpansionPanelDetails_1.default, null,
                React.createElement("pre", { dangerouslySetInnerHTML: { __html: convertToHtml.toHtml(diffHTML) } }))));
    });
    return (React.createElement("div", null, panelList));
};
const ValidateErrorPayload = (props) => {
    const panelList = props.expansionPanel.filter((data) => data.url.includes('/error')).map((currentPayload, index) => {
        const diffHTML = jsonDiff.diffString({}, currentPayload.data, undefined, { keysOnly: true });
        return (React.createElement(ExpansionPanel_1.default, { key: `${currentPayload.url}${index}` },
            React.createElement(ExpansionPanelSummary_1.default, { expandIcon: React.createElement(ExpandMore_1.default, null), "aria-controls": "panel1a-content", id: "panel1a-header" },
                React.createElement(Typography_1.default, null,
                    " ",
                    currentPayload.data.errorType,
                    " ")),
            React.createElement(ExpansionPanelDetails_1.default, null,
                React.createElement("pre", { dangerouslySetInnerHTML: { __html: convertToHtml.toHtml(diffHTML) } }))));
    });
    return (React.createElement("div", null, panelList));
};
let promise = null;
const reportError = () => {
    fetch('https://dev.carbon.gcp.lowes.com/lowes/desktop/pharosstore/NC-Mooresville/0595').catch(() => { });
};
const reportPromiseRejectionEvent = () => {
    promise = new Promise((re, rej) => {
        rej('p');
    });
};
const reportPromiseRejectionHandledEvent = () => {
    if (promise) {
        promise.catch((prom) => {
        });
        promise = null;
    }
    else {
        window.alert('no promise available');
    }
};
const reportXmlHttpError = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'flyots.html');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status !== 200) {
            Pharos.trackError(xhr, { traceIdKey: 'x-content-type-options' });
        }
    };
    xhr.onerror = () => {
        Pharos.trackError(xhr);
    };
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dev.carbon.gcp.lowes.com/lowes/desktop/pharosstore/NC-Mooresville/0595');
    xhr.send();
};
const reportFetchError = () => {
    fetch('polo.html');
    Pharos.setPageDetails({ pageName: 'Fetch-Error' });
};
const reportGmapError = () => {
    Pharos.trackError({ errorDetailsType: 'gmap' });
};
const reportDefaultError = () => {
    const errorList = [];
    try {
        const dataHere = null;
        const { error } = dataHere;
    }
    catch (e) {
        errorList.push(e);
    }
    try {
        const dataHere = undefined;
        const { error } = dataHere;
    }
    catch (e) {
        errorList.push(e);
    }
    throw errorList;
};
const ButtonData = () => {
    const [insertImage, setInsertImage] = React.useState(false);
    const [insertLink, setInsertLink] = React.useState(false);
    const reportImageEventError = () => {
        setInsertImage(true);
        setTimeout(() => {
            setInsertImage(false);
        }, 2000);
    };
    const reportLinkEventError = () => {
        setInsertLink(true);
        setTimeout(() => {
            setInsertLink(false);
        }, 2000);
    };
    const reportErrorEvent = () => {
        throw 100;
    };
    const reportCustomError = () => {
        Pharos.trackError({ code: 600, message: 'custom error msg', traceid: '12345' });
    };
    return (React.createElement("div", null,
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportError }, "Generate Error"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportImageEventError }, "Generate Image Error Event"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportLinkEventError }, "Generate Link Error Event"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportErrorEvent }, "Generate Error Event"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportPromiseRejectionEvent }, "Generate PromiseRejection Event"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportPromiseRejectionHandledEvent }, " Generate PromiseRejectionHandled Event "),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportXmlHttpError }, " Generate XmlHttp Error "),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportFetchError }, "Generate Fetch Error "),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportGmapError }, "Generate Gmap Error"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportDefaultError }, "Generate Default Combined Error"),
        React.createElement(Button_1.default, { variant: "contained", color: "primary", style: { margin: 10 }, onClick: reportCustomError }, "Track Custom Error"),
        insertImage ? React.createElement("img", { src: "polo.png" }) : null,
        insertLink ? React.createElement("link", { rel: "stylesheet", href: "style.css" }) : null));
};
function TabPanel(props) {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement("div", Object.assign({ role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}` }, other), (children.length ? children.map((eachChildren) => value === index && React.createElement(Box_1.default, { p: 3 }, eachChildren))
        : value === index && React.createElement(Box_1.default, { p: 3 }, children))));
}
const TabData = () => {
    const [value, setValue] = React.useState(0);
    const [expansionPanel, setAddToView] = React.useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    addToView = (payload) => {
        expansionPanelList.push(payload);
        setAddToView([...expansionPanelList]);
    };
    return (React.createElement("div", null,
        React.createElement(AppBar_1.default, { position: "static" },
            React.createElement(Tabs_1.default, { value: value, onChange: handleChange, "aria-label": "simple tabs example" },
                React.createElement(Tab_1.default, { label: "Request" }),
                React.createElement(Tab_1.default, { label: "Errors" }))),
        React.createElement(TabPanel, { value: value, index: 0 },
            React.createElement(ValidatePayload, { expansionPanel: expansionPanel })),
        React.createElement(TabPanel, { value: value, index: 1 },
            React.createElement(ButtonData, null),
            React.createElement(ValidateErrorPayload, { expansionPanel: expansionPanel }))));
};
const RenderView = (() => {
    ReactDOM.render(React.createElement(React.Fragment, null,
        React.createElement("h1", null, " Pharos Client Request"),
        React.createElement(TabData, null)), document.getElementById('pharosWrapper'));
    return addToView;
})();
exports.default = RenderView;
