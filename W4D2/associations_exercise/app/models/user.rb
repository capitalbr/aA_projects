# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

    has_many :enrollments,
    primary_key: :id,
    foreign_key: :student_id,
    class_name: :Enrollment

    # returns an array of courses
    has_many :enrolled_courses,  # it's like calling .each on User#enrollments and passing it block
                        # and for each 'ele' we are calling Enrollment#course (var.course) and
                        # and shoveling in that into an array to be returned.
    through: :enrollments, #creating join to joins table
    source: :course
end
