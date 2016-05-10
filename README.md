# stoksistemi

npm install
komutuyla, uygulamamız için gerekli npm paketlerini indirip, sonrasında config-dev dosyamızın içinde veri tabanı ayaralarını yaptıktan sonra;

npm start
### dev-config.js dosyamiz daki ilgili kismi kullanmak istedigniz veri tabanina gore guncellemeyi unutmayin,
```javascript
database:'veri_tabani_ismi',
username: "kullanici_adi",
password: "sifre",
params: {
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    host: 'localhost',

    define: {
        underscored: true
    }
}
```
eger sqlite kullancaksaniz ; host:'localhost'  satirini asagidaki gibi degistirin;

storage: 'stoksistemi.sqlite'
