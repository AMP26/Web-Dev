USE bus_booking;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	name VARCHAR(250), 
	email VARCHAR(250)
);


CREATE TABLE buses (
	id INT AUTO_INCREMENT PRIMARY KEY,
	busnumber INT,
	totalseats INT,
	availableseats INT
);


CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber VARCHAR(20) NOT NULL
);


CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10,2) NOT NULL,
    paymentStatus VARCHAR(50) NOT NULL
);