class Solution {
  constructor() {
    this.queue = [];
    this.stack = [];
  }

  pushCharacter(char) {
    this.stack.push(char);
  }

  enqueueCharacter(char) {
    this.queue.push(char);
  }

  popCharacter() {
    return this.stack.pop();
  }

  dequeueCharacter() {
    return this.queue.shift();
  }
}
