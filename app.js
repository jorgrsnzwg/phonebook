const { request, response, Router, json } = require('express');
const express = require('express');
const { db } = require('./config');
var router = express.Router();
const config = require('./config');
const conn = require('./db');
const { query, commit } = require('./db');
const app = express();
app.listen(config.app.port);
console.log("Listening on "+ config.app.link + config.app.host + ":" + config.app.port);

class Contact{
  constructor(PersonID, LastName, FirstName, Address, City){
    this.PersonID = PersonID;
    this.LastName = LastName;
    this.FirstName = FirstName;
    this.Address = Address;
    this.City = City;
  }
}
module.exports = Contact;

app.post ('/contacts', function(request, response){
  async  function  addContact(contact) {
    try {
      let  pool = await  conn.connect(config);
      let  insertContact = await  pool.request()
      .input('Id', sql.Int, contact.PersonID)
      .input('Title', sql.NVarChar, contact.LastName)
      .input('Quantity', sql.Int, contact.FirstName)
      .input('Message', sql.NVarChar, contact.Address)
      .input('City', sql.NVarChar, contact.City)
      .execute('InsertOrders');
      return  insertContact.recordsets;
    }
    catch (err) {
      console.log(err);
      module.exports = addContact;
    }}

    let contact = request.body
    addContact(contact).then(data  => {
      response.status(201).json(data);
    })
  });

    app.get ('/contacts', function(request, response, next) {
      
    conn.query('Select * from contact.contacts', 
        function(err, data){
        if (err) throw err;
        response.json(data)
        });
        });

    app.get('/contacts/:id', function(request, response, next) {

    conn.query('Select * from contact.contacts WHERE PersonID =' + request.params.id, 
    
        function(err, data){
        if (err) throw err;
        response.json(data)
        });
        });


    app.delete('/contacts/:id', function(request, response, next){
  
    conn.query("delete from contact.contacts WHERE PersonID = " + request.params.id,
        function(err, data){
        if (err) throw err; 
        console.log("Deleted Succesfully!")
        response.json(data)
        });
        });