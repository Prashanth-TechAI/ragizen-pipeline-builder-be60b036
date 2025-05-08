
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  name: string;
  component: React.ReactNode;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step circle */}
          <div 
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
              currentStep === index 
                ? "bg-primary text-primary-foreground" 
                : currentStep > index
                  ? "bg-primary/80 text-primary-foreground"
                  : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </div>
          
          {/* Step name */}
          <span 
            className={cn(
              "ml-2 text-sm hidden sm:inline-block",
              currentStep === index 
                ? "text-foreground font-medium" 
                : "text-muted-foreground"
            )}
          >
            {step.name}
          </span>
          
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div 
              className={cn(
                "h-[2px] w-12 sm:w-24 mx-2",
                currentStep > index ? "bg-primary/60" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
