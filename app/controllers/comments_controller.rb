class CommentsController < ApplicationController
  def index
    @comments = Comment.all.order(created_at: :desc)
  end

  def create
    Comment.create comment_params

    @comments = Comment.all.order(created_at: :desc)
  end

  private

    def comment_params
      params.permit(:author, :text)
    end
end
