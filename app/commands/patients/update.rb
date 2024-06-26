class Patients::Update < Mutations::Command
  required do
    integer :id
  end

  optional do
    string :first_name
    string :last_name
    date :dob
    string :email, matches: URI::MailTo::EMAIL_REGEXP
    string :gender, in: %w[male female]
    string :notes, empty: true
    string :medications, empty: true
  end

  def validate
    return unless patient.nil?

    add_error(:patient, :patient_not_found, "Patient with id #{inputs[:id]} not found")
  end

  def execute
    patient.update(inputs.except(:id))
    patient
  end

  def patient
    Patient.find_by_id(inputs[:id])
  end
end
