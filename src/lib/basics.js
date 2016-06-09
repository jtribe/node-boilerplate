import lugg from 'lugg'
import BunyanLoggly from 'bunyan-loggly'
import configNode from 'config-node'

export default function setup() {
  initLogging(configNode.logging)
}

export function initLogging(config) {
  let logConfig = Object.assign({}, config)
  if (logConfig.loggly) {
    logConfig.streams = logConfig.streams || []
    logConfig.streams.push({
      type: 'raw',
      stream: new BunyanLoggly(logConfig.loggly)
    })
  }
  lugg.init(logConfig)
}
