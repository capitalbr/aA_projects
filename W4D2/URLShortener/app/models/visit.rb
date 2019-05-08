class Visit < ApplicationRecord
    validates :shortened_url_id, :user_id, presence: true

    def self.record_visit!(user, shortened_url)
        Visit.create!(user_id: user.id, shortened_url_id: shortened_url.id)
    end

end