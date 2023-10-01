import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormProps, useForm as useHookForm } from "react-hook-form";
import { TypeOf, ZodSchema } from "zod";

interface Props<T extends ZodSchema> extends UseFormProps<TypeOf<T>> {
  schema: T;
}

export const useForm = <T extends ZodSchema>({ schema, ...props }: Props<T>) =>
  useHookForm({ resolver: zodResolver(schema), mode: "onChange", ...props });
