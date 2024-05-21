class Api::V1::PatientsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    outcome = Patients::List.run(pagination_params)
    
    if outcome.success?
      patients = outcome.result
      render json: patients, status: :ok
    else
      render json: { errors: outcome.errors }, status: :unprocessable_entity
    end
  end

  def create
    outcome = Patients::Create.run(patient_params)

    if outcome.success?
      patient = outcome.result
      render json: patient, status: :created
    else
      render json: { errors: outcome.errors }, status: :unprocessable_entity
    end    
  end

  def update
    outcome = Patients::Update.run(patient_params.merge(id: params[:id]))

    if outcome.success?
      patient = outcome.result
      render json: patient, status: :ok
    else
      render json: { errors: outcome.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    outcome = Patients::Remove.run(id: params[:id])

    if outcome.success?
      head :ok
    else
      render json: { errors: outcome.errors }, status: :unprocessable_entity
    end
  end

  def search 
    outcome = Patients::Search.run(search_params)

    if outcome.success?
      patients = outcome.result
      render json: patients, status: :ok
    else
      render json: { errors: outcome.errors }, status: :unprocessable_entity
    end
  end

  def search_params
    params.permit(:page, :per_page, :query)
  end

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :dob, :email, :gender, :notes, :medications)
  end 

  def pagination_params
    params.permit(:page, :per_page)
  end

end
