Implements a data parsing API as per REQUIREMENTS.MD
----------------------------------------------------

* Programming Language: TypeScript, compiled to JavaScript
* Testing Framework: Jest, with Supertest for Endpoint Testing

1. Install: `$npm install`

2. Build and Run in Separate Terminals:
   * In Terminal 1:
     `$npm run build:dev`
     (Builds JavaScript to `./dist` which you can deploy to PROD, perhaps...)

   * In Terminal 2:
     `$npm run start:dev`

3. Or, build and run in parallel (for development environment usually):
   `$npm run dev`

4. Sample curl scripts if you'd like to see the service in action
   (just for fun)
   See `./curlatorium`

5. Unit Tests: See ./src/__test__
   `$npm run test`
   * `./src/__test__/server.test.ts` tests out the API Endpoints via Supertest.
   * `./src/__test__/Parser.test.ts` tests out the low-level data parser.

6. Coverage Report
   `$npm run coverage`
   (outputs ASCII report to terminal and also generates pretty coverage
    report in `./coverage/lcov-report/index.html`)

7. Global LOGGER_LEVEL:
   Uncomment one of the LOGGER_LEVEL export statements in `./config/constants.ts`

8. Listen Port: See PORT in `./config/constants.ts`

9. Enjoy!

   
