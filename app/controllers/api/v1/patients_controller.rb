class Api::V1::PatientsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    patients = Patient.all
    render json: patients
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

  def patient_params
    params.require(:patient).permit(:first_name, :last_name, :dob, :email, :gender, :notes, :medications)
  end 

end
