export interface CardProps {
    title: string;
    content: string;
    buttonText?: string;
    onButtonClick?: () => void;
    variantButton?: "center" | "right" | "left";
    sizeButton?: "sm" | "md" | "lg";
  }

export interface ButtonProps {
    text: React.ReactNode;
    onClick?: () => void;
    variant?: "center" | "right" | "left";
    size?: "sm" | "md" | "lg";
  }