
const startHrTime = () => process.hrtime()

const getHrTimeDiff = (startTime) => {
    const [ts, tns] = process.hrtime(startTime)
    return ts * 1e3 + tns / 1e6
}

const startTime = startHrTime()

setTimeout(() => {
    console.log(`1 process done after ${getHrTimeDiff(startTime)}`)
}, 1e3)

const toId = setTimeout(() => {
    console.log(`2 process done after ${getHrTimeDiff(startTime)}`)
}, 1e3)

clearTimeout(toId)


const intervalId = setInterval(() => {
    console.log(`interval done after ${getHrTimeDiff(startTime)}`)
}, 500)

setTimeout(() => {
    clearInterval(intervalId)
    // console.log(`timeout to clean interval done after ${getHrTimeDiff(startTime)}`)
}, 5000)


console.log(`main process done after ${getHrTimeDiff(startTime)}`)


console.log(startHrTime());
