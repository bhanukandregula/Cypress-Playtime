#### To generate the report
npx cypress run --reporter mochawesome

#### to merge all the JSON reports to one report
npx mochawesome-merge ./cypress/reports/mochawesome-report/*.json > report01.json
(or)

##### we can use below command when we have token unexpoected error when we try to marge the HTML reports from JSON reports. (last steo)
npx mochawesome-merge ./cypress/reports/mochawesome-report/*.json | out-file -encoding ascii ./ report01.json

#### Create HTML report put of JSON reports whihc are already generated
npx marge ./report01.json --reportDir ./ --inline

##### This will work on windows.
Notes: npm i rimraf
rimraf -rf < ./file-path>