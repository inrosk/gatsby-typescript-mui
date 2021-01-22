import React from "react";

import { TextField } from "@material-ui/core";

import { useField, FieldAttributes } from "formik";

interface TextFieldProps {
  placeholder?: string;
  label?: string;
  margin?: "none" | "dense" | "normal" | undefined;
  multiline?: boolean;
  rows?: number;
  rowsMax?: number;
  type?: string;
  className?: string;
}

export const MyTextField: React.FC<FieldAttributes<{}> & TextFieldProps> = ({
  placeholder,
  label,
  autoFocus,
  margin,
  type,
  multiline,
  rows,
  rowsMax,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);

  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      {...field}
      placeholder={placeholder}
      label={label}
      fullWidth
      type={type}
      margin={margin}
      multiline={multiline}
      rows={rows}
      rowsMax={rowsMax}
      autoFocus={autoFocus}
      error={!!errorText}
      helperText={errorText}
    />
  );
};

interface TextAreaProps {
  placeholder?: string;
  label?: string;
  multiline: boolean;
  rows: number;
  rowsMax: number;
}

export const MyTextArea: React.FC<FieldAttributes<{}> & TextAreaProps> = ({
  placeholder,
  label,
  multiline,
  rows,
  rowsMax,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);

  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      {...field}
      placeholder={placeholder}
      label={label}
      fullWidth
      multiline={multiline}
      rows={rows}
      rowsMax={rowsMax}
      error={!!errorText}
      helperText={errorText}
    />
  );
};
