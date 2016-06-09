import lugg from 'lugg'
import BunyanLoggly from 'bunyan-loggly'
import config from './config'

export default function setup() {
  initLogging(config.logging)
}

export function initLogging(logConfig) {
  let luggConfig = Object.assign({}, logConfig)
  if (luggConfig.loggly) {
    luggConfig.streams = luggConfig.streams || []
    luggConfig.streams.push({
      type: 'raw',
      stream: new BunyanLoggly(luggConfig.loggly)
    })
  }
  lugg.init(luggConfig)
}
