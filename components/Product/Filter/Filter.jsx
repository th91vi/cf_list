import { useState } from "react";

import { ButtonGroup, ToggleButton, Stack } from "react-bootstrap";
import {
  FaFilter,
  FaBalanceScale,
  FaSortAmountDownAlt,
  FaSortNumericDown,
  FaSignInAlt,
} from "react-icons/fa";

export function Filter() {
  const [checkedFilter, setCheckedFilter] = useState("Filtro");
  const [checkedOrder, setCheckedOrder] = useState("Relevância");

  const options = {
    filter: [
      { value: "Filtro", icon: <FaFilter /> },
      { value: "Comparar", icon: <FaBalanceScale /> },
      { value: "Entrar", icon: <FaSignInAlt /> },
    ],
    order: [
      { value: "Relevância", icon: <FaSortAmountDownAlt /> },
      { value: "Menor preço", icon: <FaSortNumericDown /> },
    ],
  };
  return (
    <Stack>
      <ButtonGroup className="my-3">
        {options.filter.map((button, k) => (
          <ToggleButton
            key={k}
            id={`button-${button.value}-${k}`}
            type="radio"
            value={button.value}
            checked={checkedFilter === button.value}
            onChange={(e) => setCheckedFilter(e.currentTarget.value)}
          >
            {button.icon} {button.value}
          </ToggleButton>
        ))}
      </ButtonGroup>

      <span>
        <i>Ordernar:</i>
      </span>
      <ButtonGroup>
        {options.order.map((button, k) => (
          <ToggleButton
            key={k}
            id={`button-${button.value}-${k}`}
            type="radio"
            value={button.value}
            checked={checkedOrder === button.value}
            onChange={(e) => setCheckedOrder(e.currentTarget.value)}
          >
            {button.icon} {button.value}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </Stack>
  );
}
