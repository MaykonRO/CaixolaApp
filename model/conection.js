// Abrindo a db
let outDB;
let db;

const DbName = 'db_searchLocal',
    versionDB = 1;


const createDB = () => {
    if(window.indexedDB){
        const request = window.indexedDB.open(DbName, versionDB);


        //requisição para falar algo caso de um sucesso ou um erro
        request.onerror = (event) => {
            console.log(event);
        }

        request.onsuccess = (event) =>{
            console.log(event, db);
        }

        //requisição de atualizar o db
        request.onupgradeneeded = (event) => {

            //salva a DB
            db = event.target.result;

            //object strorage = tabela
            const objectStoreCostumer = db.createObjectStore('customer', {
                keyPath: 'id_costumer',
                autoIncrement: true
            });

            objectStoreCostumer.createIndex('name', 'name', {unique: false});
            objectStoreCostumer.createIndex('celular','celular', {unique: true});
            
            const objectStoreAddressCos = db.createObjectStore('address', {
                keyPath: 'id_address',
                autoIncrement: true
            });

            objectStoreAddressCos.createIndex('cep', 'cep', {unique: false});
            objectStoreAddressCos.createIndex('numero', 'numero', {unique: false});
            objectStoreAddressCos.createIndex('rua', 'rua', {unique: false});
            objectStoreAddressCos.createIndex('bairro', 'bairro', {unique: false});
            objectStoreAddressCos.createIndex('cidade', 'cidade', {unique: false});
            objectStoreAddressCos.createIndex('estado', 'estado', {unique: false});

            console.log('Config completed');
        }
    }
    else {
        console.log('no support');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createDB(); 
})
