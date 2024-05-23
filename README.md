# ProFingerprint
ProFingerprint is a JavaScript device fingerprinting library that uses @Joe12387's OP Fingerprint Script and his Incognito Detector.
Copyright (c) 2021 - 2024 Joe Rutkowski
Released under MIT License

## Usage

To import the script do:
```html
<script src="https://cdn.jsdelivr.net/gh/cmerk2021/pro-fingerprint@main/build/main.min.js" type="module">
```
You now have access to a table named `fingerprintData`. To view an example of everything you can access in the table, view the example JSON of the table at this [website](https://cmerk2021.github.io/pro-fingerprint/index.html).

## You can now access

- Unique fingerprint (made to be more unique if that's what you need)
- Persistent fingerprint (made to last upon major changes)
- Device IP data (IP Address, location, etc.)
- If device is using incognito
(Comparable features to Fingerprint.js)
