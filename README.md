# jeopardy
A jeopardy web app implemented in React.js. Add custom questions and answers to the app, and play with friends :tada:

## demo
You can play the jeopardy game by going to this [demo page](https://jessvb.github.io/jeopardy/), downloading and editing the [csv template of questions and answers](https://github.com/jessvb/jeopardy/blob/static-upload-csv/src/jeopardy_qa.template.csv), and uploading your personalized csv to the demo page.

## setup
### custom jeopardy questions and answers
Before running the server, duplicate the CSV template in the `jeopardy/server/src/` directory and call it `jeopardy_qa.csv`:
```bash
cd server/src
cp jeopardy_qa.template.csv jeopardy_qa.csv
```
In the CSV file, note the following column names and meanings:
| Header | Meaning                       |
|--------|-------------------------------|
| c      | category names                |
| q#     | question number #             |
| h#_#'  | hint number #' for question # |
| a#     | answer number #               |

Enter custom category names, questions, answers and hints in the rows of the CSV file. The jeopardy game will expand to include as many categories (rows) that you add. Each category should have five questions/answers, but hints are not necessary.

### backend
To set up the backend (which parses through the CSV file for the questions, answers and hints), first install the node dependencies:
```bash
cd server
npm install
```
Next, run the server with `npm start`. You should see something like this after running the command:
```bash
> server@0.0.0 start /some/path/jeopardy/server
> node ./bin/www
```

### frontend
To set up the frontend, you'll have to install additional dependencies. In a new terminal from the main `jeopardy` directory, `cd` into the frontend folder and run `npm install`:
```bash
cd frontend
npm install
```
Next, start the React.js app by running `npm start`. You should see something like this in the terminal:
```bash
Compiled successfully!
You can now view jeopardy in the browser.
  Local:            http://localhost:3000
```
A web browser should pop up and go to http://localhost:3000. If not, navigate there manually. You should see a web page similar to the following:
![jeopardy web app screenshot](https://github.com/jessvb/jeopardy/blob/master/jeopardy_example_screenshot.png)

If you only see "loading...", your CSV file may not be set up quite right. See the [custom jeopardy questions and answers](#custom-jeopardy-questions-and-answers) section.

## development context
Social distancing is hard. This project was developed during the COVID-19 crisis to spice up [Aletheia](https://www.aletheia.org/)'s virtual youth group :collision:
