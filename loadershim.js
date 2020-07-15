/**
 * Mock the enqueue Gatsby global.
 */

global.___loader = {
  enqueue: jest.fn(),
}
