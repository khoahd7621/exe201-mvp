ALTER TABLE hu_user ADD COLUMN IF NOT EXISTS package_time varchar(30);
ALTER TABLE hu_comment ADD COLUMN IF NOT EXISTS topic varchar(50);
ALTER TABLE hu_user DROP COLUMN IF EXISTS subscription_expired_date;
ALTER TABLE hu_user ADD COLUMN IF NOT EXISTS subscription_expired_date TIMESTAMP;