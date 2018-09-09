/**
 * This is a setup file which is loaded by Jest before running tests. This is the 
 * place to add any initialization code
 */

  /**
  * When prop types fail, test still passes. This duck typing for console.error
  * ensures that the test fails for prop type validations
  */
  const throwForPropTypeErrors = () => {
    const consoleError = console.error;
    console.error = (message) => {
        if (/(Failed prop type)/.test(message)) {
            throw new Error(message);
        }
        consoleError(message);
    };
}



// Execute all the setup code here
throwForPropTypeErrors();


