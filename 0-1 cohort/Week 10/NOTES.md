# Lec 01

## Types of DB

- ![alt text](img/image.png)
- Connecting to postgres
  ![alt text](img/image-1.png)
- Basic types of queries
  ![alt text](img/image-2.png)
- Let's start
  ![alt text](img/image-3.png)
- ![alt text](img/image-4.png)
- ![alt text](img/image-5.png)
  ![alt text](img/image-6.png)
- `psql` cli for postgres
  ![alt text](img/image-7.png)
  ![alt text](img/image-8.png)
- Run the scripts
  ![alt text](img/image-9.png)
- ![alt text](img/image-10.png)
- To avoid SQL Injection we are using the template variable in Raw SQL queries
  ![alt text](img/image-11.png)
  ![alt text](img/image-12.png)
  ![alt text](img/image-13.png)
  ![alt text](img/image-14.png)
  ![alt text](img/image-15.png)
  ![alt text](img/image-16.png)
- Joins
  ![alt text](img/image-17.png)
  ![alt text](img/image-18.png)
- LEFT JOIN everything from the left table
- ![alt text](img/image-19.png)
- Problems with writting raw queries
  ![alt text](img/image-20.png)
-

## Types of ORM

- Prisma, Drizzle

## Prisma

### Introduction

- Prisma keeps track of all the migrations happen in the app and gives you automatic migration
- Database migration, also known as schema migration, is the process of moving data from one database to another, while modifying the structure of the objects in the database.
- Postgres connection string
  ![alt text](image.png)
- Rows in SQL are not always printed sequentially
  ![alt text](image-3.png)

### npm vs npx

- npm: it is a manager, npx: it is a package executable

### Prisma Migrations

- After running `npx prisma migrate dev --name Initialize the schema` prisma does two things for us
  - Create tables in db along with a \_prisma_migrations table where prisma keeps all log of migrations happened
  - Create migration.sql
- Schema Migration vs Data Migration
- if we install locally
  `npx prisma init`
  `npx tsc —init`
  if we install globaly `tsc -= init`

### Generating the prisma client

- What is a client?
  - Based on the db schema corresponding JS object files are created on which we can perform some actions.
    ![alt text](image-1.png)
- What is a auto generated client?
  - The process of converting the schema.prisma into the client is what called the auto generated client.
- When we run `npx prisma generate` then prisma generates clients, these clients can we used in the app and under the hood these clients perform the SQL queries for us.
  ![alt text](image-2.png)
- Anytime you change your prisma schema you gotta have to do two things:
  - Migrate
  - Generate clients
