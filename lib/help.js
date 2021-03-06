let previousCpuUsage = process.cpuUsage()
let previousHrTime = process.hrtime();

setInterval(() => {
  const currentCpuUsage = process.cpuUsage()
  const currentHrTime = process.hrtime(previousHrTime)
  const duration = currentHrTime[0] * 1e6 + currentHrTime[1] / 1e3;
  previousHrTime = currentHrTime
  previousCpuUsage = currentCpuUsage
  const cpuPercent = {
    user: currentCpuUsage.user / duration,
    system: currentCpuUsage.system / duration
  }
  console.log(`cpuPercent: ${JSON.stringify(cpuPercent)}`)
}, 1000)