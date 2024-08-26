/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import React, { useState } from "react";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { ContentItem } from "@/types/index";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BusinessTypeSelectList } from "@/constants";
import { Switch } from "../ui/switch";

export const InputForm = <
  T extends z.ZodType<any, any>,
  S extends string | number = string | number,
>({
  control,
  formName,
  label,
  placeholder,
  type,
  className,
  state,
  setState,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  state?: S;
  setState?: React.Dispatch<React.SetStateAction<S>>;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              value={state !== undefined ? state : field.value || ""}
              onChange={(e) => {
                const value =
                  type === "number"
                    ? (Number(e.target.value) as S)
                    : (e.target.value as S);
                field.onChange(e);
                if (setState) {
                  setState(value);
                }
              }}
              type={type}
              className={className}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const SelectForm = <
  T extends z.ZodType<any, any>,
  ItemTypes extends ContentItem,
>({
  control,
  formName,
  label,
  content,
  placeholder,
  valueKey,
  displayKey,
  disabled,
  onChange,
  className,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  content: ItemTypes[];
  placeholder?: string;
  disabled?: any;
  valueKey: keyof ItemTypes;
  displayKey: keyof ItemTypes;
  onChange?: (value: any) => void;
  className?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={(value) => {
                field.onChange(value);
                if (onChange) {
                  onChange(value);
                }
              }}
              value={field.value}
              disabled={disabled}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent onChange={field.onChange} className={className}>
                {content.map((item) => (
                  <SelectItem
                    key={String(item[valueKey])}
                    value={String(item[valueKey])}
                    className="cursor-pointer"
                  >
                    {item[displayKey]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const TextAreaForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="resize-none"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const CheckboxForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
  className,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder: string;
  className?: string;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className={className}>
              <Checkbox
                checked={field.value ?? false}
                onCheckedChange={field.onChange}
                {...field}
              />
              <span className="ml-3">{placeholder}</span>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const DatePickerForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  placeholder,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  placeholder?: string;
}) => {
  const [date, setDate] = useState<Date>();
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", {
                    "text-muted-foreground": !date,
                  })}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {date ? format(date, "PPP") : <span>{placeholder}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    setDate(selectedDate);
                    field.onChange(selectedDate);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export const SwitchForm = <T extends z.ZodType<any, any>>({
  control,
  formName,
  label,
  className,
  id,
  isActive,
  onToggle,
}: {
  control: Control<z.infer<T>>;
  formName: FieldPath<z.infer<T>>;
  label: string;
  className?: string;
  id?: string | number;
  isActive?: boolean;
  onToggle?: (id: string | number) => void;
}) => {
  return (
    <FormField
      control={control}
      name={formName}
      render={({ field }) => {
        return (
          <div className={cn("flex items-center space-x-5", className)}>
            <Switch
              checked={isActive}
              onChange={(e) => {
                e.stopPropagation();
              }}
              value={field.value}
              onClick={() => {
                if (id !== undefined && onToggle) {
                  onToggle(id);
                }
              }}
            />
            <span>{label}</span>
          </div>
        );
      }}
    />
  );
};

// Form generator from Helly

/**
 * @formControl formControl - Used for the (form.control) parameter.
 * @formFields - Receive a const with the configuration of your form,
 * how many fields and the type of the fields (radio, checkbox, input..).
 * @gridCols A string with a number of how many cols you want on the form.
 *  */
export const FormGeneration = ({ formControl, formFields, gridCols }: any) => {
  // Splitting by two to show the grid cols in the mobile view.
  const gridColsMobile = gridCols / 2;
  const roundedCols = Math.round(gridColsMobile);

  return (
    <div
      className={`grid grid-cols-${gridCols} gap-2 max-xl:grid-cols-${roundedCols}`}
    >
      {formFields.map(
        (item: {
          content: any;
          type: string;
          formName: string;
          title: string;
          placeholder?: string | undefined;
        }) =>
          item.content ? (
            <div key={item.title} className="w-full items-end">
              <SelectForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.title}
                valueKey={"value"}
                content={BusinessTypeSelectList}
                displayKey="title"
              />
            </div>
          ) : item.type === "checkbox" ? (
            <div key={item.title} className="w-full items-end">
              <CheckboxForm
                control={formControl}
                formName={item.formName}
                label=""
                placeholder={item.title}
              />
            </div>
          ) : item.type === "datePicker" ? (
            <div key={item.title} className="w-full">
              <DatePickerForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
              />
            </div>
          ) : item.type === "radio" ? (
            <div key={item.title} className="flex w-full gap-2">
              <InputForm
                control={formControl}
                formName={item.formName}
                label=""
                type="radio"
                className="size-fit"
                placeholder={item.placeholder}
              />
              <span className="">{item.placeholder}</span>
            </div>
          ) : item.type === "number" ? (
            <InputForm
              key={item.title}
              control={formControl}
              formName={item.formName}
              label={item.title}
              type={item.type}
              className=""
              placeholder={item.placeholder}
            />
          ) : (
            <div key={item.title} className="w-full">
              <InputForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
              />
            </div>
          ),
      )}
    </div>
  );
};

export const FormGenerationRadio = ({
  formControl,
  formFields,
  className,
}: any) => {
  return (
    <div className={`my-2 flex w-1/2 items-end gap-6 ${className}`}>
      {formFields.map(
        (item: {
          content: any;
          type: string;
          formName: string;
          title: string;
          placeholder?: string | undefined;
        }) => (
          <div key={item.title} className="flex items-center gap-2">
            <InputForm
              control={formControl}
              formName={item.formName}
              label=""
              type="radio"
              className="size-fit"
            />
            <label className="mt-2">{item.title}</label>
          </div>
        ),
      )}
    </div>
  );
};

export const FormGenerationRadioGrid = ({ formControl, formFields }: any) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {formFields.map(
        (item: {
          content: any;
          type: string;
          formName: string;
          title: string;
          placeholder?: string | undefined;
        }) =>
          item.type === "radio" ? (
            <div key={item.title} className="flex w-full gap-2">
              <InputForm
                control={formControl}
                formName={item.formName}
                label=""
                type="radio"
                className="w-fit"
                placeholder={item.placeholder}
              />
              <span className="mt-2 content-center">{item.placeholder}</span>
            </div>
          ) : (
            <div key={item.title} className="col-span-2 w-full">
              <InputForm
                control={formControl}
                formName={item.formName}
                label={item.title}
                placeholder={item.placeholder}
              />
            </div>
          ),
      )}
    </div>
  );
};

/**
 * @formControl formControl - Used for the (form.control) parameter.
 * @formFields - Receive a component with sections and cards.
 * @gridCols A string with a number of how many cols you want on the form.
 *  */
export const NorthFormGeneration = ({
  formControl,
  formFields,
  gridCols,
}: {
  gridCols: string;
  formFields: {
    formTitle: string;
    description: string;
    section: {
      sectionName: string;
      cards: {
        title: string;
        colQty: string;
        fields: {
          id: number;
          formName: string;
          title: string;
          type: string;
          placeholder: string;
          value: string;
        }[];
        title2?: string;
        fields2?: {
          id: number;
          formName: string;
          title: string;
          type: string;
          placeholder: string;
          value: string;
        }[];
      }[];
    }[];
  };
  formControl: any;
}) => {
  // Splitting by two to show the grid cols in the mobile view.
  const gridColsMobile = Number(gridCols) / 2;
  const roundedCols = Math.round(gridColsMobile);

  return (
    <React.Fragment>
      {formFields.section.map((sec) => (
        <section key={sec.sectionName}>
          <h1 className="mb-3 mt-7 flex gap-2 text-2xl font-semibold text-sky-500">
            {sec.sectionName}
          </h1>
          <div
            className={`grid grid-cols-${gridCols} gap-2 max-xl:grid-cols-${roundedCols}`}
          >
            {sec.cards.map(
              (item: {
                title: string;
                fields: {
                  id: number;
                  formName: string;
                  title: string;
                  type: string;
                  placeholder: string;
                  value: string;
                }[];
                title2?: string;
                fields2?: {
                  id: number;
                  formName: string;
                  title: string;
                  type: string;
                  placeholder: string;
                  value: string;
                }[];
                colQty: string;
              }) => (
                <div key={item.title} className="rounded-md border p-4">
                  <p className="mb-3 text-center text-xl">{item.title}</p>
                  <FormGeneration
                    formControl={formControl}
                    formFields={item.fields}
                    gridCols={item.colQty}
                  />
                  {item.fields2 ? (
                    <div key={item.title}>
                      <p className="my-3 text-start text-base">{item.title2}</p>
                      <FormGeneration
                        formControl={formControl}
                        formFields={item.fields2}
                        gridCols={item.colQty}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ),
            )}
          </div>
        </section>
      ))}
    </React.Fragment>
  );
};
