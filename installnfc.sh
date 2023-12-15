#bin/sh

git clone git@github.com:nfc-tools/libnfc.git
sudo apt install autoconf libtools libusb-dev
sudo autoreconf -vis
./configure --prefix=/usr --sysconfdir=/etc
make
sudo make install 
cd ..
sudo bash -c 'echo -e "allow_autoscan = true\ndevice.name = \"_PN532_I2C\"\ndevice.connstring = \"pn532_i2c:/dev/i2c-1\"" > /etc/nfc/libnfc.conf'

