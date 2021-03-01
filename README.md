# SQL_CRUD

steps:
1. Open SQL WORKBENCH
2. `create Database dummyDatabase;`
3. `use dummyDatabase`
4. Create table using `create table dummytable(id int not null auto_increment, first_name varchar(255) not null, last_name varchar(255) not null, primary key (id));`
Open postman
1. Get All Data present in DATABASE get method and in url `http://localhost:4000/`
2. ![Screenshot from 2021-03-01 11-35-48](https://user-images.githubusercontent.com/73871061/109458174-4eb8c080-7a82-11eb-95c4-136fb56c2027.png)

3. Get Single Data present in DATABASE use get method and in url `http://localhost:4000/:id`
4. ![Screenshot from 2021-03-01 11-41-28](https://user-images.githubusercontent.com/73871061/109458576-15348500-7a83-11eb-98ce-f6c5e15f5bb0.png)

5. To post data select `post` method `http://localhost:4000/` select x-www-form-urlencoded in body
6. ![Screenshot from 2021-03-01 11-42-04](https://user-images.githubusercontent.com/73871061/109458625-29788200-7a83-11eb-88a0-e96ec05228e6.png)

7. To update data select id which you want to update with `put` method `http://localhost:4000/:id` select x-www-form-urlencoded in body
8. ![Screenshot from 2021-03-01 11-46-44](https://user-images.githubusercontent.com/73871061/109458968-d7842c00-7a83-11eb-839e-d6e64f160f0a.png)

9.  To delete Data select id which you want to delete with `Delete` method and in url `http://localhost:4000/:id`
10. ![Screenshot from 2021-03-01 11-50-43](https://user-images.githubusercontent.com/73871061/109459203-5e390900-7a84-11eb-9c8e-5a1a441e8c45.png)
 

