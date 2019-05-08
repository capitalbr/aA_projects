# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true

    def self.something(user, long_url_string)
        arr = ['.com', '.org', '.gov']
        var = ShortenedUrl.random_code + arr.sample
        ShortenedUrl.create!(:long_url => long_url_string, :short_url => var, :user_id => user.id)
    end

   has_many :submitted_urls,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ShortenedUrl

end
