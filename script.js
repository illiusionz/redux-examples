   console.clear();

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

   // Actions Creator - deletePolicy
   const deletePolicy = (name) => {
      return {
         type: 'DELETE_POLICY',
         payload: {
            name: name
         }
      };
   };

   // Actions Creator - createClaim
   const createClaim = (name, amountOfMoneyToCollect) => {
      return {
         type: 'CREATE_CLAIM',
         payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
         }
      };
   };


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

   // Reducers - Accounting Department
   const accounting = (oldBagOfMoney = 100, action) => {

      if (action.type === 'CREATE_CLAIM') {
         return bagOfMoney - action.payload.amountOfMoneyToCollect;
      } else if (action.type === "CREATE_POLICY") {
         return bagOfMoney + action.payload.amount;
      }

      return bagOfMOney;
   };


   // Reducers - Policy Department
   const policies = (listOfPolicies = [], action) => {

      if (action.type === 'CREATE_POLICY') {
         return [...listOfPolicies, action.payload.name];
      } else if (action.type === 'DELETE_POLICY') {

         return listOfPolicies.filter(name => name !== action.payload.name)
      }

      return listOfPolicies;
   };
