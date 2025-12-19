import * as React from "react"
import { cn } from "@/lib/utils"

interface StepContextValue {
  currentStep: number
  totalSteps: number
}

export const StepContext = React.createContext<StepContextValue>({
  currentStep: 0,
  totalSteps: 0,
})

export function useStep() {
  return React.useContext(StepContext)
}

interface StepProps {
  children: React.ReactNode
  visibleAt: number
  className?: string
}

export function Step({ children, visibleAt, className }: StepProps) {
  const { currentStep } = useStep()
  const isVisible = currentStep >= visibleAt

  return (
    <div
      className={cn(
        "transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}
