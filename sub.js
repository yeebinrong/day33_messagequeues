const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://test.mosquitto.org:1883')
// const client = mqtt.connect('mqtt://localhost:1883')

// wait for connection
client.on('connect', () => {
    console.info('Connected')
    // subscribe to a topic
    client.subscribe('pikachu', (err, granted) => {
        // check if there are any errors
        if (null != err) {
            console.error('Subscription Error: ', err)
            process.exit(-1)
        }
        console.info('Granted: ', granted)

        // listen to incoming messages from the topic
        client.on('message', (topic, payload) => {
            const data = payload.toString()
            console.info(`Topic: ${topic}, Data: ${data}`)
        })
    })
})