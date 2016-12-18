class StaticPagesController < ApplicationController
  def top
    @comments = Comment.all.order(created_at: :desc)
  end
end
