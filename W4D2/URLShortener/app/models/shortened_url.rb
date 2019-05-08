
 require 'securerandom'


#  create_table "shortened_urls", force: :cascade do |t|
#     t.string "long_url", null: false
#     t.string "short_url", null: false
#     t.integer "user_id", null: false
#     t.index ["long_url"], name: "index_shortened_urls_on_long_url", unique: true
#   end


class ShortenedUrl < ApplicationRecord
   extend SecureRandom
        
   validates :long_url, :short_url, :user_id, presence: true
   
    def self.random_code
        loop do 
            var = SecureRandom.urlsafe_base64(16)
            return var if !ShortenedUrl.exists?(:short_url => var)
        end

       

    end

     belongs_to :submitter,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User



        
end