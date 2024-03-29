# frozen_string_literal: true

class Recipe < ApplicationRecord
  belongs_to :user

  mount_uploader :cover, CoverUploader
end
