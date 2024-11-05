import React, { useState } from "react";

type TUseInputHook = {
    value: string;
    onChange:  (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput(): TUseInputHook {
    const [value, setValue] = useState('');

    return  {
        value,
        onChange: (event: React.FormEvent<HTMLInputElement>) => setValue((event.target as HTMLInputElement).value)
    }
}