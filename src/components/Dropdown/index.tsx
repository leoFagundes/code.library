import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type DropdownProps = {
  label: string;
  options: string[];
  onClickOption: (value: string) => void;
  isOpen: boolean;
  toggleOpenStatus: VoidFunction;
  currentOption?: string;
  icon: IconProp;
  size?:
    | "2xs"
    | "xs"
    | "sm"
    | "lg"
    | "xl"
    | "2xl"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  optionIcon?: IconProp;
};

export default function Dropdown({
  label,
  options,
  onClickOption,
  isOpen,
  toggleOpenStatus,
  currentOption,
  icon,
  size = "xl",
  optionIcon,
}: DropdownProps) {
  return (
    <S.DropdownContainer data-testid="dropdown" className="popup">
      <input type="checkbox" checked={isOpen} onChange={toggleOpenStatus} />
      <FontAwesomeIcon
        size={size}
        className="burger"
        tabIndex={0}
        color="white"
        icon={icon}
      />
      <nav className="popup-window">
        <legend>{label}</legend>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => onClickOption(option)}>
              <button
                className={
                  currentOption && currentOption === option
                    ? "current-option"
                    : ""
                }
              >
                {optionIcon && (
                  <FontAwesomeIcon color="black" icon={faHeadphonesSimple} />
                )}

                <span>{option}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </S.DropdownContainer>
  );
}
