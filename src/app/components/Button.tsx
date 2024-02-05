import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  // ? sert a rendre le paramètre potionnel
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {/* icon && veut dire si il y a icon en paramètre alors */}
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button