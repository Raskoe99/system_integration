import fs from "fs";
import { load } from "cheerio";
import sqlite3 from 'sqlite3';

const response = await fetch("https://www.iban.com/exchange-rates");
const result = await response.text();
let sql, sqlSelect;
fs.writeFileSync("index.html", result);

const page = fs.readFileSync("index.html", "utf-8");
const $ = load(page);

const table = $(".table");
table.find('tr').each((index, element) => {
    if (index === 0) return;

    const row = $(element)
    const columns = row.find('td');

    // "EQ", er en måde at indexe indhold og derefter nemt tilgå det. 
    const currency = columns.eq(0).text();
    const rate = columns.eq(1).text();
    const value = columns.eq(2).text();

    const db = new sqlite3.Database('currency.db', sqlite3.OPEN_READWRITE, (err) => { 
        if(err) return console.log(err.message);
        //db.run(`CREATE TABLE IF NOT EXISTS currencyDB (id integer primary key, currency, rate, value)`);
        
        // sql = `INSERT INTO currencyDB (currency, rate, value) VALUES (?, ?, ?)`;

        // //-------- Insert data into table from options --------//
        // db.run(sql, [currency, rate, value],
        // (err) => { if(err) return console.log(err.message);});

        //--------- Query the DB --------//
        sqlSelect = `SELECT * FROM currencyDB`;
        db.all(sqlSelect, [], (err, rows) => {
            if(err) return console.log(err.message);
            rows.forEach((row) => { 
                console.log(row); 
            });
        });

        db.close();
    });

    // console.log(currency, ' : ', rate, ' : ', value);

});