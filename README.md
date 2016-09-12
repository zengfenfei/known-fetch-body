# Detect fetch API body type

Detect the type of a variable is the known request body type of browser fetch API and `node-fetch`. Currently known types are string, FormData, Blob, URLSearchParams, Buffer, stream.Readable.

## Install
`npm install known-fetch-body`

## Quick Start
```typescript
import isKnownReqBodyType from "known-fetch-body";
import {createReadStream} from "stream";

isKnownReqBodyType("string");   // true
isKnownReqBodyType(new FormData()); // true
isKnownReqBodyType(new URLSearchParams());  // true
isKnownReqBodyType(new Buffer());   // true
isKnownReqBodyType(createReadStream("filePath"));    // true
isKnownReqBodyType({}); // false
```