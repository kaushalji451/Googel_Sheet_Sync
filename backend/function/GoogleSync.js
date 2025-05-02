
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
    person.id,
    person.name,
    person.email,
    person.phoneNo,
    person.gender,
    person.appDate,
    person.astroAmount,
    person.astrologyType,
    person.country,
    person.date,
    person.nationality,
    person.organization,
    person.place,
    person.poojaAmount,
    person.poojaType,
    person.reason,
    person.shraddhaType,
    person.time,
    person.vastuAmount,
    person.vastuType,
    person.yogaAmount,
    person.yogaType,
  ]);
  const readRes = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${sheetName}!A2:V`,
  });

  const existingRows = readRes.data.values || [];
  const existingId = new Set(existingRows.map(row => row[1])); // Collect all existing ID

  const rowsToAppend = newRows.filter(row => !existingId.has(row[1]));

  if (rowsToAppend.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:V`,
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