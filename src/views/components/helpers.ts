import { baseClassName } from "main";



export function c(className: string) {
    return `${baseClassName}__${className}`;
  }