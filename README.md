# privatebin_encryptor

NodeJS Microservice for encrypting data before sending it to a PrivateBin instance

## Purpose

This app encrypts data meant to be sent to a PrivateBin server (https://github.com/PrivateBin/PrivateBin)

It takes any data received as POST on port 4040 and responds with the cipherdata necessary to PrivateBin API (https://github.com/PrivateBin/PrivateBin/wiki/API)

The RawDeflate lib used in PrivateBin is not RFC compliant, therefore the data compression must be executed with the same library PrivateBin uses (standard gzip compression methods, even with header stripping won't work)

There's no special security added to this app as I don't need any extra security layer, but please note that this app is transfering encrypted data and the decipher key via HTTP, which is not a secure protocol for transferring data on a network.

## Usage

In order to run, just execute the privatebin_encryptor.js file given using NodeJS
`node privatebin_encryptor.js`
