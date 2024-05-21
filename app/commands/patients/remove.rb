class Patients::Remove < Mutations::Command
    required do
        integer :id
    end

    def validate
        if patient.nil?
            add_error(:patient, :patient_not_found, "Patient with id #{inputs[:id]} not found")
        end
    end

    def execute
        patient.destroy
    end

    def patient
        Patient.find_by_id(inputs[:id])
    end
end