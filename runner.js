const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjcyNzExNDQ3LTFkZmItNDZmMy1iZmM0LTI0OTAwMzA2NDgzYS0xNjc2NTA1ODE5NDkyIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjhjMzQwMzAtOGU3YS00OTRkLTk5ZDMtZWU1MDM5OTM1N2IzIiwidHlwZSI6InQifQ.4F2FfmbUgrltK-z8IK4M_vvoTrEULg1FwoxAZ70N2Rw'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
