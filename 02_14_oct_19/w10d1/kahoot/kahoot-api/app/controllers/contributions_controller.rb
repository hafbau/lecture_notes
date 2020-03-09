class ContributionsController < ApplicationController
  before_action :set_contribution, only: [:show, :update, :destroy]

  # GET /contributions
  def index
    @contributions = Contribution.all

    render json: @contributions
  end

  # GET /contributions/1
  def show
    render json: @contribution
  end

  # POST /contributions
  def create
    @contribution = Contribution.new(contribution_params)

    if @contribution.save
      render json: @contribution, status: :created, location: @contribution
    else
      render json: @contribution.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /contributions/1
  def update
    if @contribution.update(contribution_params)
      render json: @contribution
    else
      render json: @contribution.errors, status: :unprocessable_entity
    end
  end

  # DELETE /contributions/1
  def destroy
    @contribution.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contribution
      @contribution = Contribution.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def contribution_params
      params.require(:contribution).permit(:content, :accepted_at, :user_id, :story_id, :status)
    end
end
