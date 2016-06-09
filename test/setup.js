import chai from 'chai'
import Bluebird from 'bluebird'
import util from 'util'
import setup from '../src/lib/basics'
import sinonChai from 'sinon-chai'
import sinonAsPromised from 'sinon-as-promised'
import chaiAsPromised from 'chai-as-promised'

process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'warn'
setup()

chai.use(chaiAsPromised)
chai.use(sinonChai)
global.expect = chai.expect
global.assert = chai.assert
sinonAsPromised(Bluebird)

console.inspect = function(...args) {
  return console.log.apply(console, args.map(arg => util.inspect(arg, {depth: null})))
}
