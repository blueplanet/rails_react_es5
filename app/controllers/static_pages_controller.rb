class StaticPagesController < ApplicationController
  def top
    @comments = Comment.all
  end
end
