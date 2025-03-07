import type { ReactNode } from 'react'
import type { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cuhacking/shared/ui/form'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Label } from '@cuhacking/shared/ui/label'
import { RadioGroup, RadioGroupItem } from '@cuhacking/shared/ui/radio-group'
import { Typography } from '@cuhacking/shared/ui/typography/typgoraphy'
import { cn } from '@cuhacking/shared/utils/cn'
import { useState } from 'react'

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupFieldProps {
  form: UseFormReturn<any>
  name: string
  label: string
  options: RadioOption[]
  isRequired?: boolean
  isDisabled?: boolean
  info?: ReactNode
}

export function RadioGroupField({ form, name, label, options, isRequired = false, info, isDisabled = false }: RadioGroupFieldProps) {
  const [validInput, setValidInput] = useState(false)
  return (
    <GlassmorphicCard info={info} className={cn('w-full max-h-min p-2 flex flex-col justify-start items-start gap-0.5', isDisabled && 'opacity-50 cursor-not-allowed bg-gray-800')} variant={info ? 'info' : 'default'}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col gap-0.5 w-full h-auto justify-start items-start">
            <FormLabel>
              <Typography variant="paragraph-base" className={cn(validInput && 'bg-greendiant bg-clip-text text-transparent')}>
                <p>
                  {label}
                  <span className="text-red-600 ml-1">
                    {isRequired ? '*' : null}
                  </span>
                </p>
              </Typography>
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={(e) => {
                  field.onChange(e)
                  setValidInput(true)
                }}
                defaultValue={field.value}
                className="flex flex-wrap gap-1 w-full"
              >
                {options.map(option => (
                  <div key={option.value}>
                    <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                    <Label
                      htmlFor={option.value}
                      className="px-2.5 py-2 min-w-9 rounded-md flex items-center justify-center
                          text-sm font-extralight uppercase
                          cursor-pointer peer-data-[state=checked]:bg-white/25 hover:bg-white/10 transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </GlassmorphicCard>
  )
}
