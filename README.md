# redux-examples
Redux - Action Creators and Reducers Code Examples

This example shows how to create Action Creators and Reducers

Action Creators - Objects that that have an action 
createPolicy()
deletePolicy()
createClaims();

Example:

// Actions Creator - createPolicy
const createPolicy = (name, amount) => {
   return { // ACTION - A FORM IN OUR ANALOGY
      type: 'CREATE_POLICY',
      payload: {
         name: name,
         amount: amount

         // ES2015 CODE
         // name, amount
      }
   };
};


Reducers - Think of deparments in company as Reducers, they should return a result of the function it passes
claimsHistory
accounting
policies


Example:

// Reducers - Claims Department
const claimsHistory = (oldListOfClaims = [], action) => {
   // We care about this action - FORM
   if (action.type === 'CREATE_CLAIM') {
      // ES2015 Create new Array from oldListOfClaims and add value of action.payload
      return [...oldListOfClaims, action.payload];
   }
   //We don't care about the action - FORM
   return oldListOfClaims;
};



Redux Code
const store = createStore(ourDepartments);
store.dispatch(createPolicy('Alex', 20));
console.log(store.getState());
