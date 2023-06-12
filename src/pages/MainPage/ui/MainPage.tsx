import { useState } from "react";
import { Input } from "shared/ui/Input/Input";

const MainPage = () => {
  const [value, setValue] = useState<string>("");
  const handleValue = (s: string) => {
    setValue(s);
  };
  return (
    <div>
      Main Page
      <Input value={value} onChange={handleValue} placeholder="Input" />
    </div>
  );
};

export default MainPage;
