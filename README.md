# stoksistemi

npm install
komutuyla, uygulamamız için gerekli npm paketlerini indirip, sonrasında config-dev dosyamızın içinde veri tabanı ayaralarını yaptıktan sonra;

npm start
### dev-config.js dosyamızdaki ilgili kismi kullanmak istediğiniz veri tabanına göre güncellemeyi unutmayın,
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
eger sqlite kullanacaksaniz ; host:'localhost'  satırını aşağıdaki gibi degiştirin;

```javascript
storage: 'stoksistemi.sqlite'
```
