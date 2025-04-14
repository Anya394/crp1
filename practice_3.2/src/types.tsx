export interface CardProps {
    title: string;
    content: string;
    buttonText?: string;
    onButtonClick?: () => void;
    miniButton?: boolean;
}

export interface ButtonProps {
    text?: React.ReactNode;
    onClick?: () => void;
    mini?;
}