CREATE TABLE scholarships(
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE,
    keywords varchar[],
    description varchar(1000),
    link varchar(300)
);
DROP TABLE scholarships;

INSERT INTO scholarships(name, keywords, description, link) VALUES ('Amazon Future Engineer', ARRAY['amazon', 'computer ccience'], 'Amazon Future Engineer is a comprehensive childhood-to-career program aimed at increasing access to computer science education for children and young adults from underserved and underrepresented communities.', 'https://www.amazonfutureengineer.com/');