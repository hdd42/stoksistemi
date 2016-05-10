
module.exports =(chai,request,helper) =>{
    const baseUrl ="http://localhost:3001/api";
    let users = [];
    describe('Api end point Users', () =>{

        //user end point tests tests
        it('api/users - list all users.', (done) => {
            request(`${baseUrl}/users`, (error, res, body) => {
                body = JSON.parse(body);
                res.statusCode.should.equal(200);
                body.count.should.be.exists;
                body.users.should.be.a('array');
                body.count.should.be.a('number');
                body.count.should.gt(4);
                body.users.should.have.length.gt(4);
                 users =body.users;
                done();
            })

        });

        it('api/users/:id {id} ile eslesen kullaniciyi geri dondur.(sifre alani olmamali)', (done) => {
            let user = users[0];
            request(`${baseUrl}/users/${user.id}`, (error, res, body) => {
                body = JSON.parse(body);
                res.statusCode.should.equal(200);
                body.user.id.should.equal(user.id);
                body.user.name.should.equal(user.name)
              
                done();
            })
        });

        it('api/users/:id {id} ile eslesen kullaniciyi geri dondur. Sifre alani mevcut olmamali', (done) => {
            let user = users[0];
            request(`${baseUrl}/users/${user.id}`, (error, res, body) => {
                body = JSON.parse(body);
                res.statusCode.should.equal(200);
                body.user.id.should.equal(user.id);
                body.user.name.should.equal(user.name)
                done();
            })
        });

        it('api/users/:id {var olmayan ama gecerli formattaki id} icin hata degil null geri dondur.', (done) => {
            let user = users[0];
            request(`${baseUrl}/users/56565`, (error, res, body) => {
                body = JSON.parse(body);
                res.statusCode.should.equal(200);
                if(body.user!=null)
                    return done(new Error('User Null degil'))
                done();
            })
        });

        it('POST: api/users/ {yeni kullanici} ekler.', (done) => {
            let user = helper.getUser();
            request.post(`${baseUrl}/users`, {form:user},
                (error, res, body) => {
                    body = JSON.parse(body);
                    res.statusCode.should.equal(201);
                    body.user.should.be.a('object')
                    body.user.email.should.equal(user.email)
                    done();
                })
        });

        it('DELETE: api/users/ {mevcut kullaniciyi} siler.', (done) => {
            let user = users[0];
            request.delete(`${baseUrl}/users/${user.id}`,
                (error, res, body) => {
                    body = JSON.parse(body);
                    res.statusCode.should.equal(200);
                    body.count.should.equal(1);
                    
                    done();
                })
        });

    })
}