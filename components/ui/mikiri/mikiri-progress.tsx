import { forwardRef } from "react";
import { Progress } from "../progress";
import { Field, FieldLabel } from "../field";

interface MikiriProgressProps {
    className?: string;
    value: number;
}

export const MikiriProgress = forwardRef<HTMLDivElement, MikiriProgressProps>(
    ({ className, value }, ref) => {
        return (
            <Field>
                <FieldLabel>
                    <span className="font-inter text-sakura text-xs">{value}%</span>
                </FieldLabel>
                <Progress className={className} ref={ref} value={value} />
            </Field>


        )
    }
)

MikiriProgress.displayName = "MikiriProgress"