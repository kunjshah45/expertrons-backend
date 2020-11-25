ALTER TABLE users ALTER COLUMN id SET DEFAULT uuid_generate_v4();

INSERT INTO users (username, password) VALUES ("admin@gmail.com", "herecomesthehashedpassword")

ALTER TABLE ledger ALTER COLUMN id SET DEFAULT uuid_generate_v4();

INSERT INTO socities (pincode) VALUES (401101);
ALTER TABLE socities ALTER COLUMN id SET DEFAULT uuid_generate_v4();

ALTER TABLE members ALTER COLUMN id SET DEFAULT uuid_generate_v4();