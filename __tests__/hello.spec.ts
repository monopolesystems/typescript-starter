import { hello } from '../src'

describe('hello', () => {
  it('should pass', () => {
    expect(hello()).toEqual('Hello, World!')
  })
})
