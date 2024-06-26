import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Patient, PatientInputs } from "../types/patients";
import { useCreateOrModifyPatient } from "../hooks/useCreatePatient";
import classNames from "classnames";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

type Props = {
  onSuccess?: () => void;
  patient?: Patient;
};

export const PatientForm = ({ onSuccess, patient }: Props) => {
  const { mutateAsync, isPending, isError } = useCreateOrModifyPatient(() => {
    onSuccess?.();
  }, patient?.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PatientInputs>({ defaultValues: patient });

  const onSubmit: SubmitHandler<PatientInputs> = async (data) => {
    mutateAsync(data);
  };

  const loader = isPending ? (
    <span className="loading loading-spinner"></span>
  ) : null;

  const errorAlert = isError ? (
    <div role="alert" className="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>
        Something went wrong when updating the patient. Please try again.
      </span>
    </div>
  ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center"
    >
      {errorAlert}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">First Name</span>
        </div>

        <input
          className={classNames(
            "input input-sm input-bordered w-full max-w-xs",
            { "input-error": errors.first_name }
          )}
          {...register("first_name", { required: true })}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Last Name</span>
        </div>

        <input
          className={classNames(
            "input input-sm input-bordered w-full max-w-xs",
            { "input-error": errors.last_name }
          )}
          {...register("last_name", { required: true })}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Date of Birth</span>
        </div>

        <Controller
          name="dob"
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <DatePicker
              selected={value}
              onChange={onChange}
              className={classNames(
                "input input-sm input-bordered w-full max-w-xs",
                { "input-error": errors.dob }
              )}
            />
          )}
          control={control}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email</span>
        </div>

        <input
          className={classNames(
            "input input-sm input-bordered w-full max-w-xs",
            { "input-error": errors.email }
          )}
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        />
      </label>

      <div className="flex w-full max-w-xs">
        <div className="form-control">
          <label className="label cursor-pointer gap-1">
            <span className="label-text">Male</span>
            <input
              type="radio"
              {...register("gender", { required: true })}
              className={classNames("radio", { "radio-error": errors.gender })}
              value="male"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-1">
            <span className="label-text">Female</span>
            <input
              type="radio"
              {...register("gender", { required: true })}
              className={classNames("radio", { "radio-error": errors.gender })}
              value="female"
            />
          </label>
        </div>
      </div>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Medications</span>
        </div>
        <textarea
          className="textarea textarea-bordered w-full"
          {...register("medications")}
        ></textarea>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Notes</span>
        </div>
        <textarea
          className="textarea textarea-bordered w-full"
          {...register("notes")}
        ></textarea>
      </label>

      <div className="flex gap-1 justify-end w-full">
        <Link className="btn" to="/">
          Cancel
        </Link>
        <button
          className={classNames("btn btn-primary", {
            "btn-disabled": isPending,
          })}
        >
          {loader}
          {patient ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};
