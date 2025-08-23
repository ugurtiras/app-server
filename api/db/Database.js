// Database.js - Düzeltilmiş hali
const mongoose = require("mongoose");

let instance = null;
class Database {
    constructor() {
        if (!instance) { // Bu satır yanlıştı - !instance olmalı
            this.mongoConnection = null;
            instance = this;
        }
        return instance;
    }

    async connect(options) {
        try {
            let db = await mongoose.connect(options.CONNECTION_STRING,);
            this.mongoConnection = db;
            console.log("Database bağlantısı başarılı!");
        } catch (error) {
            console.error("Database bağlantı hatası:", error.message);
        }
    }
}

module.exports = Database;