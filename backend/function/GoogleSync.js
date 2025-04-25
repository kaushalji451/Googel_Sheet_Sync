
const {google} = require('googleapis');
const keys = require('../credentials.json');
require('dotenv').config();


// google sheets api
const auth = new google.auth.GoogleAuth({
    credentials: keys,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

// function to append data to google sheets
// data should be an array of objects with the following keys: name, email, phone_no, father
const appendData = async (data) => {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = process.env.SPREADSHEET_ID; 
  const sheetName = 'Sheet1';

  const newRows = data.map(person => [
    person.name,
    person.email,
    person.phone_no,
    person.father_name,
    person.gender,
  ]);

  const readRes = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A2:E`,
  });

  const existingRows = readRes.data.values || [];
  const existingEmails = new Set(existingRows.map(row => row[1])); // Collect all existing emails

  const rowsToAppend = newRows.filter(row => !existingEmails.has(row[1]));

  if (rowsToAppend.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`,
      valueInputOption: 'RAW',
      resource: {
        values: rowsToAppend,
      },
    });
    console.log(`Appended ${rowsToAppend.length} new row(s)`);
  } else {
    console.log('No new rows to append');
  }
  return true;
};

module.exports = appendData;