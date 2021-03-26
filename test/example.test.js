// IMPORT MODULES under test here:
import { whoIsTheVictor } from '../utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('if result is a draw', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const user = 'rock';
    const computer = 'rock';
    const expected = 'Your Might is Equal';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = whoIsTheVictor(user, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

    test('if result is a draw', (expect) => {

        //Arrange
        // Set up your arguments and expectations
        const user = 'rock';
        const computer = 'rock';
        const expected = 'Your Might is Equal';

        //Act 
        // Call the function you're testing and set the result to a const
        const actual = whoIsTheVictor(user, computer);

        //Expect
        // Make assertions about what is expected versus the actual result
        expect.equal(actual, expected);
    });
