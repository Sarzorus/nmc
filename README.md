## NFC Media Center

NMC is a media center designed to provide a cheap alternative to expensive NFC based music players like the yoto mini. It is currently pr-alpha. 

### Hardware Setup

Currently I'm running this on a Raspberry Pi 3b. If you have a similar setup with the same PN532 v3 sensor you can simply run the ./installnfc.sh script to get setup on a
clean install. However, this assumes you have the same wiring, protocol and dip switch positions. Currently I do not have graphics for this. I'm not expecting much interest yet so if you want to try it yourself please open an issue so I know that you would like me to complete the setup details. 

### Software Setup

I prefer to be on the latest versions. Currently my local environment is running.  
```
node --version  
v21.5.0
npm --version
10.2.5
```

This is all that's needed at the moment, however it is likely that VLC and additional software dependencies will be required to make things work correctly. 

### Licensing 
#### Copyright Logan Cormier
#### MIT Licensed