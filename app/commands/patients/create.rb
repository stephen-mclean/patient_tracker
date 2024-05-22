class Patients::Create < Mutations::Command
  required do
    string :first_name
    string :last_name
    date :dob
    string :email, matches: URI::MailTo::EMAIL_REGEXP
    string :gender, in: %w[male female]
  end

  optional do
    string :notes, empty: true
    string :medications, empty: true
  end

  def execute
    Patient.create(inputs)
  end
end
