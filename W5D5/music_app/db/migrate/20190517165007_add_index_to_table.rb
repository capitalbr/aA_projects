class AddIndexToTable < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :session_token
    add_index :users, :email_address, unique: true
  end
end
