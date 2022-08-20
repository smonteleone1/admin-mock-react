# pharos

[![Build Status](http://vmlnxjenkinsmaster01.lowes.com/buildStatus/icon?job=Framework/pharos/release-1.0.0)](http://vmlnxjenkinsmaster01.lowes.com/job/Framework/job/pharos/job/release-1.0.0/)

[![Quality Gate Status](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=d-frw%2Fpharos&metric=alert_status)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=d-frw/pharos)

Pharos is a Real User Monitoring tool, aims to capture application performance, component performance and errors. 

## Usage

Add the below script tags in the head section of your application.

```js
<script>
!function(n,o,r){["configure","trackError","startSendingData", "setUser", "setStore","setRelease", "trackEvent"].forEach(r=>{(n[o]=n[o]||{})[r]=function(){(n[o][r].q=n[o][r].q||[]).push(arguments)}})}(window,"Pharos");
Pharos.configure({ applicationName: 'Application Name', token:'2334555-565656-45454' });
</script>
<script async src="https://dev.lowescdn.com/dev0021/node/pharos/5.0.0/pharos.js" crossorigin></script>
```

```jsx
// JSX
<script dangerouslySetInnerHTML= {{ __html: '!function(n,o,r){["configure","trackError","startSendingData", "setUser", "setStore", "setRelease", "trackEvent"].forEach(r=>{(n[o]=n[o]||{})[r]=function(){(n[o][r].q=n[o][r].q||[]).push(arguments)}})}(window,"Pharos");  Pharos.configure({ applicationName:"lowes", token:'2334555-565656-45454' });'}}></script>
<script async src="https://dev.lowescdn.com/dev0021/node/pharos/5.0.0/pharos.js" crossorigin></script>
```

## Features and browser support

Methods available in Pharos:

Name: configure

Start monitoring your application performance and errors by calling configure method by providing the application name.

Example: 
```js
Pharos.configure({applicationName: ‘lowes.com’})
```

Properties supported in configure method:

| Properties            | Required     | Type        | Description                                                                                                                                                             |
|-------------------    |----------    |---------    |---------------------------------------------------------------------------------------------------------------------------------------------------------------------    |
| token                 | Yes          | string      | auth Key to store, fetch data and to validate the request
| applicationName       | No          | string      | Key to store and fetch data with application name.                                                                                                                      |
| pageName              | No           | string      | Key to store and fetch data with page name. This can be configured later by setting waitForClientData property as true.                                                 |
| pageTitle             | No           | string      | Key to store and fetch data with page title. This can be configured later by setting waitForClientData property as true.                                                |
| waitForClientData     | No           | boolean     | If any application wants to store additional details along with the metrics captured then set this property as true and pass the data with startSendingData method.     |
| networkThreshold      | No           | number      | If network connection is below 3g(270ms rtt) then metrics will be sent on page unload. This can be configured, please refer https://wicg.github.io/netinfo/.            |

See [API.md](API.md) for more details.

### Requirements
- [Node 12.0.0+](https://nodejs.org/)

## Maintainers
- [Framework developers](mailto:DL-DIST-DIGITAL-FRAMEWORKS@lowes.com)

## Contribution

This project follows the [innersource contribution model](https://tools.lowes.com/confluence/display/AR/Inner+source+contribution).