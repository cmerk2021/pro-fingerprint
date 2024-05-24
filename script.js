"use strict" // STRICT MODE ON

import { detectIncognito } from 'https://cdn.jsdelivr.net/gh/Joe12387/detectIncognito@main/dist/detectIncognito.esm.js';

function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;  // Handle errors during loading
      document.head.appendChild(script);
    });
  }
  
// SETUP TABLE
var fingerprintData = {}

// FINGERPRINT
loadScript("https://cdn.jsdelivr.net/gh/Joe12387/op-fingerprinting-script@main/opfs.min.js")
  .then(() => {
    fingerprint().then((result) => {
        fingerprintData.fingerprint = result.fingerprints
        fingerprintData.profile = result.profile
      });
  })



// IP ADDRESS
async function fetchIpData() {
await fetch("https://api.ipify.org")
    .then(response => response.text())  // Parse the response as JSON
    .then(data => {
        fingerprintData.ip_address = data
    })

await fetch(`http://ip-api.com/json/${fingerprintData.ip_address}`)
    .then(response => response.json())
    .then(data => {
        fingerprintData.ip_data = data
    })
await fingerprintData.ip_address
await fingerprintData.ip_data
}
fetchIpData()

// INCOGNITO

detectIncognito().then((result) => {
    fingerprintData.isIncognito = result.isPrivate
    fingerprintData.browserName = result.browserName
  });

// CACHE CHECK
if (!localStorage.getItem("cache")) {
    fingerprintData.cachedData = false
    localStorage.setItem("cache", "true")
} else if (localStorage.getItem("cache") == "true") {
    fingerprintData.cachedData = true
}  

// HTML
setTimeout(() => {
    const documentData = document.getElementById("data")
    const tableData = JSON.stringify(fingerprintData, null, 2).replace(/\]/g, ',\n]')
    const formattedString = tableData.replace(/},/g, '},\n');
    documentData.innerHTML = tableData
}, 10000)
