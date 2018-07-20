var myCharacteristic;
window.log = console.log;

document.getElementsByClassName('bluetooth-button')[0].addEventListener('click', (e) => {
    e.preventDefault();
    onStartButtonClick();
});

async function onStartButtonClick() {
    try {
        log('Requesting Bluetooth Device');
        const device = await navigator.bluetooth.requestDevice({
            filters: [{services: ['battery_service']}]
        });

        log('Connecting to GATT Server');
        const server = await device.gatt.connect();

        log('Getting Service');
        const service = await server.getPrimaryService('battery_service');

        log('Getting Characteristic');
        myCharacteristic = await service.getCharacteristic('battery_level');

        await myCharacteristic.startNotifications();

        log('> Notifications started');
        myCharacteristic.addEventListener('characteristicvaluechanged',
            handleNotifications);
    } catch (error) {
        log(error);
    }
}

function handleNotifications(event) {
    let value = event.target.value;
    let a = [];
    // Convert raw data bytes to hex values just for the sake of showing something.
    // In the "real" world, you'd use data.getUint8, data.getUint16 or even
    // TextDecoder to process raw data bytes.
    for (let i = 0; i < value.byteLength; i++) {
        a.push('0x' + ('00' + value.getUint8(i).toString(16)).slice(-2));
    }
    log('> ' + a.join(' '));
}