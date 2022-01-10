import React, {
  ComponentProps,
  forwardRef,
  memo,
  ReactNode,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

import { Form } from "@unform/web";
import { FormHandles, FormProps, SubmitHandler } from "@unform/core";
import { AnyObjectSchema, ValidationError } from "yup";

interface IProps
  extends Omit<ComponentProps<typeof Form>, "onSubmit" | "children" | "ref"> {
  parseDataAtSubmit?: FormProps["onSubmit"];
  validationSchema?: AnyObjectSchema;
  schemaParams?: any;
  onSubmit?: FormProps["onSubmit"];
  children: ReactNode;
}
const UnformComponent = forwardRef<FormHandles, IProps>(
  (
    {
      parseDataAtSubmit,
      onSubmit = () => {},
      validationSchema,
      schemaParams,
      ...props
    },
    ref
  ) => {
    const formRef = useRef<FormHandles>(null);

    useImperativeHandle(ref, () => formRef.current as FormHandles, [formRef]);

    const handleSubmit = useCallback<SubmitHandler>(
      async (data, ...restParams) => {
        try {
          const validateData = parseDataAtSubmit
            ? parseDataAtSubmit(data, ...restParams)
            : data;

          if (validationSchema) {
            await validationSchema.validate(validateData, {
              abortEarly: false,
              context: {
                formData: validateData,
                schemaParams,
              },
            });
          }

          formRef.current?.setErrors({});

          await onSubmit?.(validateData, ...restParams);
        } catch (err: any) {
          if (err?.data?.errors) {
            formRef.current?.setErrors(err.data.errors);
          }

          if (err instanceof ValidationError) {
            const errorMessages: { [key: string]: string } = {};

            err.inner.forEach((error) => {
              errorMessages[error.path || ""] = error.message;
            });

            formRef.current?.setErrors(errorMessages);
          } else {
            console.error(err);
          }
        }
      },
      [validationSchema]
    );

    return (
      <Form
        style={{ width: "100%" }}
        onSubmit={handleSubmit}
        ref={formRef}
        autoComplete="off"
        {...props}
      >
        {props.children}
      </Form>
    );
  }
);

export const Unform = memo(UnformComponent);
