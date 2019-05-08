class CreateShortenedUrls < ActiveRecord::Migration[5.2]
  def change
    create_table :shortened_urls do |t|
      t.string :long_url, null: false, unique: true
      t.string :short_url, null: false, unique: true
      t.integer :user_id, null: false, unique: true
    end
    add_index :shortened_urls, :long_url, unique: true
  end
end
