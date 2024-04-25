import handleProfileSignup from './6-final-user';

async function testHandleProfileSignup() {
  try {
    const queue = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
    console.log(queue);
    if (queue.length === 2) {
      console.log('Test passed: Expected number of results received.');
    } else {
      console.error('Test failed: Unexpected number of results.');
    }
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testHandleProfileSignup();
