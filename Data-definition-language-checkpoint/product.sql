CREATE TABLE <product>
(
    Product_id,VARCHAR2(20),Primary Key,
    Product_Name,VARCHAR2(20),NOT NULL,
    Price,NUMBER,Positive value
)

ALTER TABLE Product
ADD Category VARCHAR2(20);