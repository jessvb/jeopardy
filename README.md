# jeopardy
A jeopardy web app implemented in React.js. Add custom questions and answers to the app, and play with friends :tada:

## demo
To create your own custom jeopardy game (without cloning this repo), first download and edit the csv file as described in the [custom jeopardy questions and answers](#custom-jeopardy-questions-and-answers) section. Next go to [this page](TODO-LINK), upload the file, and play your custom game :blush:

After uploading, you should see a web page similar to the following:
![jeopardy web app screenshot](https://github.com/jessvb/jeopardy/blob/master/jeopardy_example_screenshot.png)
If not, your CSV file may not be set up quite right. See the [custom jeopardy questions and answers](#custom-jeopardy-questions-and-answers) section.

## setup
### custom jeopardy questions and answers
Before setting up the website, download the [csv file here](https://github.com/jessvb/jeopardy/blob/static-upload-csv/src/jeopardy_qa.template.csv) by right-clicking the "Raw" button, clicking 'Save Link As...' (as shown in the screenshot), and naming it `jeopardy_qa.csv` (note the **`.csv`**).
![download csv template screenshot](https://github.com/jessvb/jeopardy/blob/static-upload-csv/src/how_to_download_csv.png)

Modify it with your custom category names, questions, answers and hints in the rows of the CSV file. In the CSV file, note the following column names and meanings:
| Header | Meaning                       |
|--------|-------------------------------|
| c      | category names                |
| q#     | question number #             |
| h#_#'  | hint number #' for question # |
| a#     | answer number #               |

Note also that the jeopardy game will expand to include as many categories (rows) that you add. Each category should have five questions/answers, but hints are not necessary.

### website
To set up the frontend, first install the node dependencies. In a new terminal from the main `jeopardy` directory, `cd` into the frontend folder and run `npm install`:
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
A web browser should pop up and go to http://localhost:3000. If not, navigate there manually. Next, upload your custom csv file and play your custom game :blush:


## development context
Social distancing is hard. This project was developed during the COVID-19 crisis to spice up [Aletheia](https://www.aletheia.org/)'s virtual youth group :collision:
