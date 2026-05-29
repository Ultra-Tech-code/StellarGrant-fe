"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Step2Milestones } from "./Step2Milestones";
import { defaultCreateGrantValues, type CreateGrantFormValues } from "./types";

/**
 * CreateGrantForm — step 2 (milestones) with live budget chart.
 * Steps 1+ are stubbed for future expansion.
 */
export function CreateGrantForm() {
  const methods = useForm<CreateGrantFormValues>({
    defaultValues: defaultCreateGrantValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <form className="max-w-2xl space-y-8">
        <div className="border border-border-color bg-surface p-4 ring-1 ring-border-color space-y-3">
          <label className="block font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Total budget ({methods.watch("token")})
          </label>
          <input
            type="number"
            min={0}
            {...methods.register("totalBudget", { valueAsNumber: true })}
            className="w-full border border-border-color bg-bg-secondary px-3 py-2 font-mono text-sm text-text-primary outline-none focus:border-accent-primary"
          />
        </div>
        <Step2Milestones />
      </form>
    </FormProvider>
  );
}

export { Step2Milestones } from "./Step2Milestones";
export { BudgetDistributionChart } from "./BudgetDistributionChart";
