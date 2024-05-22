class Patients::Search < Mutations::Command
  required do
    string :query
  end

  optional do
    integer :page, default: 0, min: 0
    integer :per_page, default: 10, min: 1
  end

  def execute
    patients = Patient.where('first_name LIKE ? OR last_name LIKE ?', "%#{inputs[:query]}%",
                             "%#{inputs[:query]}%")
    total = patients.count
    limit = inputs[:per_page]
    offset = inputs[:page] * inputs[:per_page]
    patients = patients.limit(limit).offset(offset) if inputs[:page] && inputs[:per_page]
    { patients:, total:, page: inputs[:page] }
  end
end
