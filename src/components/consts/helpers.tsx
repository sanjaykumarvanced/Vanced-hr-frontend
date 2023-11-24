export const toCamelCaseFormat = (value:any) => {
    return  value.toLowerCase().split('_').map((word:any, index:any) => index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }
  