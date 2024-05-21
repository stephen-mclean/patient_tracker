class Patients::Show < Mutations::Command
  required do
    integer :id
  end

  def validate
    return unless patient.nil?

    add_error(:patient, :patient_not_found, "Patient with id #{inputs[:id]} not found")
  end

  def execute
    patient
  end

  def patient
    Patient.find_by_id(inputs[:id])
  end
end
