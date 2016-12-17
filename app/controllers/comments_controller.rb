class CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def create
    Comment.create comment_params

    @comments = Comment.all
  end

  private

    def comment_params
      params.permit(:author, :text)
    end
end
