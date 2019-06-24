# README

# データベース設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Associatioon
- belongs to :user
- belongs to :group

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|  |
|image|string|  |
|user_id|integer|foreign_key: true|
|group_id|integer|foreign_key: true|

### Association
- belongs to :user
- belongs to :group


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
