INSERT INTO users (name, email, password)
VALUES ('Eva Stanley', 'estanner@yeemail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Noah Macintosh', 'macinator@coowee.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Louisa Meyer', 'lousia4mayor@coldmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, thumbnail_photo_url, cover_photo_url, country, city, street, province, post_code, active)
VALUES (3, 'Blue House', 'is blue', 1, 2, 2, 3, 'https://www.brinklau.ca/images/bella-s%20blue%20house.jpg?crc=4278832991', 'https://www.inbrampton.com/sites/inbrampton.com/files/imagecache/lead-image-full/article/2019/01/cover_photo_80.jpg', 'Canada', 'Brampton', '123 Fake Ave', 'Ontario', 'T0T3G0', false),
(2, 'Pineapple lookin', 'spongybob needs the money', 15, 0, 1, 1, 'https://i.pinimg.com/originals/af/d9/f4/afd9f42173429038923c285c321e5383.jpg', 'https://fivetwelvethirteen.files.wordpress.com/2015/03/spongebobs-house.jpg', 'Pacific Ocean', 'Bikini Bottom', '124 Conch Street', 'Bikini Atoll', 'W3T7E4', true),
(1, 'Large house', 'reallllly big', 552, 4, 5, 7, 'https://i.insider.com/5bd3751f97b3c545cb1258d8?width=1100&format=jpeg&auto=webp', 'https://i.pinimg.com/originals/10/f0/ec/10f0ec20c5265b3cf563369baa7a7c4a.jpg', 'Canada', 'Vancouver', '2542 Big Money Borough', 'British Columbia', 'R1C4A7', true);

INSERT INTO reservations (guest_id, property_id, start_date, end_date) 
VALUES (1, 1, '2018-09-11', '2018-09-26'),
(2, 2, '2019-01-04', '2019-02-01'),
(3, 3, '2021-10-01', '2021-10-14');

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 1, 1, 5, 'WOW! really big!'),
(2, 2, 2, 3, 'its underwater??? still nice tho'),
(3, 3, 3, 0, 'idek if it exists, the address is just an empty lot');