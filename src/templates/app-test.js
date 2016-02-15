import chai from 'chai'
import app from '../app/app'

describe('hello', () => {
  it('must return world', () => {
    chai.expect(app.hello()).to.equal('world')
  })
})
