const mqtt = require('async-mqtt')

const client = mqtt.connect('mqtt://test.mosquitto.org:1883')
console.info('Topic: ', process.argv[2])
console.info('Data: ', process.argv[3])

const topic = process.argv[2]
const message = process.argv[3]


const publish = async () => {
    // publish a message
    await client.publish(topic, message)
    console.info('Published...')
    // client needs to close connection unless this is a bot
    await client.end()
}

client.on('connect', publish)