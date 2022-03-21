import { useTranslation } from "hooks";
import { useRouter } from "next/router";
import { StyledSelect } from "./styled";

const SelectLocale = () => {
  const router = useRouter();
  const locale = useTranslation();
  const handleChangeLocale = (e: any) => {
    const newLocale = e.target.value;
    console.log(router);
    router.push("", "", { locale: newLocale });
  };

  return (
    <StyledSelect onChange={handleChangeLocale} defaultValue={locale}>
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </StyledSelect>
  );
};
export default SelectLocale;
